const mongoose = require('mongoose');

//funcion para cnx a bd
const mongoConn = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI, {

        });

        console.log('cnx ok');      
    } catch (error) {
        console.log('Error de conexion', error);
        throw new Error('Error de conexion');
    }
}

module.exports = {
    mongoConn,
}