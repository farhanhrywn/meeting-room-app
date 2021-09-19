const { Client } = require('../models')

class Controller {
    static async getListClient(req, res) {
        try {
            let listClient = await Client.findAll({
                order: [['id', 'ASC']]
            })
            res.status(200).json(listClient)
        } catch (error) {
            console.log(error)
        }
    }

    static async createNewClient(req, res) {
        try {
            let { name, email, phone, credit } = req.body
            let newClient = await Client.create({
                name,
                email,
                phone,
                credit
            })
            res.status(201).json(newClient)
        } catch (error) {
            if(error.name === "SequelizeUniqueConstraintError") {
                res.status(400).json({ message: "Client email already exists" })
            } else {
                res.statis(500).json({ message: "Internal Server Error" })
            }
        }
    }
}
module.exports = Controller