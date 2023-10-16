const {Router} = require('express');
const {createGenero} = require('../controllers/genero');
const {getGeneros} = require('../controllers/genero');
const router = Router();


/***Crear genero */
router.post('/', createGenero)

/*************************Consultar un genero ************************** */
router.get('/', getGeneros)


/*************************Actualizar un genero ************************** */
//router.put('/:generoId', updateGenero)


module.exports = router