const router = require('express').Router()
const ClientController = require('../controllers/clientController')

router.get('/', ClientController.getListClient)
router.post('/', ClientController.createNewClient)
module.exports = router