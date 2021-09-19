const router = require('express').Router()
const RoomController = require('../controllers/roomController')

router.get('/', RoomController.getListRoom)
module.exports = router