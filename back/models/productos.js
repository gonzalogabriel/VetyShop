const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        require:[true,"Por favor registra el nombre del producto."],
        trim:true, //quitar espacios en blanco
        maxLeght:[120,"El nombre del producto no debe exceder los 120 caracteres."]
        },
    precio:{
        type: Number,
        require:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default:0.0
    },
    descripcion:{
        type:String,
        require:[true,"Por favor registre una descripcion para el producto"],
    },
    calificacion:{
        type: Number,
        deafult:0
    },
        imagen:[
            {
                public_id:{
                    type:String,
                    required:true,
                },
                url:{
                    type:String,
                    require:true
                }

            }
        ],
    categoria:{
        type:String,
        required:[true, "Por favor selecciones la categoria del producto"],
        enum:{
            values:[
                "Alimento seco",
                "Alimento humedo",
                "Accesorios",
                "Cuidado e Higiene",
                "Medicamentos",
                "Snacks",
                "Juguetes"
            ]
        }
    },
    vendedor:{
        type:String,
        required:[true,"Por favor registre el vendedor de producto"]
    },
    inventario:{
        type:Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLeght:[5, "Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0,
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }    
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos", productosSchema)