const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get("/", function(req, res) {
    res.status(200).json({ msg: "Success" })
})
app.use(router)

app.listen(port, () => {
    console.log(`listening app on port ${port}`)
})
module.exports = app