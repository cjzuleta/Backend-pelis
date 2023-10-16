const Media = require ('../models/media');

const {request, response} = require ('express');


/*************************Crear un director ************************** */

const createMedia = async (req = request, res = response) => {
    console.log(req.body);//trae los parametros desde postman

    const {serial,titulo,sipnosis,url,portada,anio_estreno} = req.body;
    try {
        const mediaDB = await Media.findOne({serial});
        if(mediaDB){
            return res.status(400).json({msj:'Ya existe serial'})
        }

        const datos = {
            serial: serial,
            titulo: titulo,
            sipnosis: sipnosis,
            url: url,
            portada: portada,
            anio_estreno: anio_estreno,

        }
    
        const media = new Media(datos);
    
        media.save();
    
        return res.status(201).json(media);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}


/*************************Consultar un director ************************** */

const getMedias = async (req = request, res = response) => {
    //console.log(req.body);//trae los parametros desde postman

    try {
        const {estado} = req.query

        const medias = await Media.find({estado})

        return res.json(medias);
    } catch (error) {
        console.log(error);
        return res.status(500).json({msj: error});
    }

    
}



module.exports = {
    createMedia, getMedias
}