const {Router} = require('express');
const {testing} = require('../controllers/test');

const router = Router();

//cnx a respuesta de url con postman o endpoint
router.get('/test',testing);

module.exports = router;