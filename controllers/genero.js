//const {Router} = require('express');
//const router = Router();

const Genero = require ('../models/genero');

const {request, response} = require ('express');

//const {validationResult, check} = require('express-validator');

/*************************Crear un genero ************************** */

const createGenero = async (req = request, res = response) => {
    console.log(req.body);//trae los parametros desde postman

    const {nombre,descripcion} = req.body;
    try {
        const generoDB = await Genero.findOne({nombre});
        if(generoDB){
            return res.status(400).json({msj:'Ya existe nombre'})
        }

        const datos = {
            nombre: nombre,
            descripcion: descripcion
        }
    
        const genero = new Genero(datos);
    
        genero.save();
    
        return res.status(201).json(genero);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}


/*************************Consultar un genero ************************** */

const getGeneros = async (req = request, res = response) => {
    //console.log(req.body);//trae los parametros desde postman

    try {
        const {estado} = req.query

        const generos = await Genero.find({estado})

        return res.json(generos);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}


/*************************Actualizar un genero ************************** */

/*const updateGenero = async (req = request, res = response) => {

    const {nombre,descripcion} = req.body;
    try {
        const gener = await Genero.findById(req.params.generoId);
        if (!gener){
            return res.send('genero no existe');
        }

        const gene = {
            nombre: nombre,
            descripcion: descripcion
        }
    
        //const gene = new Genero(datos);
    
        gene.save();
    
        return res.status(201).json(gene);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}*/

/*router.put('/:generoId',
[ 
    check('nombre', 'nombre.requerido').not().isEmpty(),
    check('estado', 'estado.requerido').isIn(['Activo', 'Inactivo']),    
], 
async function(req, res){
    try {
        let genero = await Genero.findById(req.params.generoId)
        if (!genero){
            return res.send('Genero no existe');
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({messages:errors.array()});
        }
        
        
        genero.nombre = req.body.nombre;
        genero.estado = req.body.estado;
        genero.fechaActualizacion = new Date();

        genero = await genero.save();
        
        res.send(genero);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
})*/






module.exports = {
    createGenero, getGeneros, 
}