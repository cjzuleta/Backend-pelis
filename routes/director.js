const {Router} = require('express');
const {createDirector, getDirectores} = require('../controllers/director');
const router = Router();


/***Crear director */
router.post('/', createDirector)

/*************************Consultar un director ************************** */
router.get('/', getDirectores)


/*************************Actualizar un director ************************** */



module.exports = router