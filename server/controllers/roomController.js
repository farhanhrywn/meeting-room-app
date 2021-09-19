const { Rooms } = require('../models')

class Controller {
    static async getListRoom(req, res) {
        try {
            let listRoom = await Rooms.findAll({
                order: [['id', 'ASC']]
            })
            res.status(200).json(listRoom)
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }
}

module.exports = Controller