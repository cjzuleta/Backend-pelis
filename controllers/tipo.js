const Tipo = require ('../models/tipo');

const {request, response} = require ('express');


/*************************Crear un director ************************** */

const createTipo = async (req = request, res = response) => {
    console.log(req.body);//trae los parametros desde postman

    const {nombre} = req.body;
    try {
        const tipoDB = await Tipo.findOne({nombre});
        if(tipoDB){
            return res.status(400).json({msj:'Ya existe nombre'})
        }

        const datos = {
            nombre: nombre

        }
    
        const tipo = new Tipo(datos);
    
        tipo.save();
    
        return res.status(201).json(tipo);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}


/*************************Consultar un director ************************** */

const getTipos = async (req = request, res = response) => {
    //console.log(req.body);//trae los parametros desde postman

    try {
        const {estado} = req.query

        const tipos = await Tipo.find({estado})

        return res.json(tipos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}



module.exports = {
    createTipo, getTipos
}