const {Router} = require('express');
const {createMedia, getMedias} = require('../controllers/media');
const router = Router();


/***Crear director */
router.post('/', createMedia)

/*************************Consultar un director ************************** */
router.get('/', getMedias)


/*************************Actualizar un director ************************** */



module.exports = router