const { RoomUsage, Rooms, Client } = require('../models')

class Controller {
    static async getListRoomUsage(req, res) {
        try {
            let listRoomUsage = await RoomUsage.findAll({
                order: [['id', 'ASC']],
                include: [Rooms, Client]
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
                clientId: clientId,
                roomId: roomId,
                startTime: startTime,
                endTime: endTime,
                bookingDate: bookingDate,
                quotaUsed: quotaUsed
            })
            res.status(201).json(newRoomUsage)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Controller