const { RoomUsage } = require('../models')

class Controller {
    static async getListRoomUsage(req, res) {
        try {
            let listRoomUsage = await RoomUsage.findAll({
                order: [['id', 'ASC']]
            })
            res.status(200).json(listRoomUsage)
        } catch (error) {
            console.log(error)
        }
    }

    static async createNewRoomUsage(req, res) {
        try {
            let { clientId, roomId, startTime, endTime, bookingDate, quotaUsed } = req.body
            let newRoomUsage = await RoomUsage.create({
                clientId,
                roomId,
                startTime,
                endTime,
                bookingDate,
                quotaUsed
            })
            res.status(201).json(newRoomUsage)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Controller