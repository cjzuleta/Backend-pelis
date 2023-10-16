const {Router} = require('express');
const {createTipo, getTipos} = require('../controllers/tipo');
const router = Router();


/***Crear director */
router.post('/', createTipo)

/*************************Consultar un director ************************** */
router.get('/', getTipos)


/*************************Actualizar un director ************************** */



module.exports = router