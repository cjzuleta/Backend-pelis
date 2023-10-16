const Director = require ('../models/director');

const {request, response} = require ('express');


/*************************Crear un director ************************** */

const createDirector = async (req = request, res = response) => {
    console.log(req.body);//trae los parametros desde postman

    const {nombre} = req.body;
    try {
        const directorDB = await Director.findOne({nombre});
        if(directorDB){
            return res.status(400).json({msj:'Ya existe nombre'})
        }

        const datos = {
            nombre: nombre

        }
    
        const director = new Director(datos);
    
        director.save();
    
        return res.status(201).json(director);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}


/*************************Consultar un director ************************** */

const getDirectores = async (req = request, res = response) => {
    //console.log(req.body);//trae los parametros desde postman

    try {
        const {estado} = req.query

        const directores = await Director.find({estado})

        return res.json(directores);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}



module.exports = {
    createDirector, getDirectores
}