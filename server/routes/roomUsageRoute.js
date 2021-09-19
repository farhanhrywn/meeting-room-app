const router = require('express').Router()
const RoomUsageController = require('../controllers/roomUsageController')

router.get('/', RoomUsageController.getListRoomUsage)
router.post('/', RoomUsageController.createNewRoomUsage)
module.exports = router