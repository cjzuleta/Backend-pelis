const {Router} = require('express');
const {createProductora, getProductoras} = require('../controllers/productora');
const router = Router();


/***Crear director */
router.post('/', createProductora)

/*************************Consultar un director ************************** */
router.get('/', getProductoras)


/*************************Actualizar un director ************************** */



module.exports = router