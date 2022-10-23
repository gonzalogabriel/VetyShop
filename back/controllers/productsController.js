const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url)); //Usurpacion del require


//Ver la lista de productos
exports.getProducts=async (req,res,next) =>{
    const productos= await producto.find();
    if(!productos){
        return res.status(404).json({
            success:false,
            error:true
        })
    }


    res.status(200).json({
        success:true,
        cantidad: productos.lenght,
        productos
    })
}

//=========================================================================

//Ver producto por id, consulta del objeto por id
exports.getProductById = async (req, res, next) =>{ //require , response, next
    const product= await producto.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            sucess:false,
            message:"No encontramos ese producto"

        })
    }
    res.status(200).json({
        success:true,
        message:"Aqui debajo encuentra información sobre tu producto",
        product
    })
}

//=========================================================================

//Método para Update producto
exports.updateProduct = async (req,res,next)=>{
    let product= await producto.findById(req.params.id);
    if(!product){   //Verifico si el objeto no existe para finalziar el proceso
        return res.status(404).json({
            sucess:false,
            message:"No encontramos ese producto"

        })
    }
    // Si el objeto si existe, entonces si ejecuto la actualziacion

    product= await producto.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true
    });
    // Respodo Ok si el producto si se actualizo
    res.status(200).json({
    message:"Producto actualizado correctamente",
    producto

    })
}

//=========================================================================

//Crear nuevo producto /api/productos
exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//=========================================================================

//Eliminar un producto

exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id) //Variable de tipo modificable
    if (!product){ //Verifico que el objeto no existe para finalizar el proceso
            return res.status(404).json({ //Si el objeto no existe, return termina el metodo
            success:false,
            message: 'No encontramos ese producto'
        })
    }

    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"
    })
}

//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//Probamos el metodo con un id

//verProductoPorID('6345bbc3a1feda5e6231cd25');


