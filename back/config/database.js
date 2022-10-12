const mongoose=require("mongoose");

const connectDatabase = ()  => {

        mongoose.connect(process.env.DB_LOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true


        }).then (con=> {
            console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)

        }).catch(con=> {
            console.log(`No se logro conexion con la Base de datos Mongo`)

        })
}

//Los catch de arriba son como consecuencias

module.exports=connectDatabase;
