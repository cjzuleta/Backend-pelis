const Productora = require ('../models/productora');

const {request, response} = require ('express');


/*************************Crear un director ************************** */

const createProductora = async (req = request, res = response) => {
    console.log(req.body);//trae los parametros desde postman

    const {nombre} = req.body;
    try {
        const productoraDB = await Productora.findOne({nombre});
        if(productoraDB){
            return res.status(400).json({msj:'Ya existe nombre'})
        }

        const datos = {
            nombre: nombre

        }
    
        const productora = new Productora(datos);
    
        productora.save();
    
        return res.status(201).json(productora);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}


/*************************Consultar un director ************************** */

const getProductoras = async (req = request, res = response) => {
    //console.log(req.body);//trae los parametros desde postman

    try {
        const {estado} = req.query

        const productoras = await Productora.find({estado})

        return res.json(productoras);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}



module.exports = {
    createProductora, getProductoras
}