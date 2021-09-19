const router = require('express').Router()
const clientRoute = require('./clientRoute')
const roomRoute = require('./roomRoute')
const roomUsageRoute = require('./roomUsageRoute')

router.use('/client', clientRoute)
router.use('/room', roomRoute)
router.use('/usage', roomUsageRoute)
module.exports = router