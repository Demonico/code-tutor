const router = require("express").Router()

// Imports
const appointmentRoutes = require('./appointments')
const userRoutes = require('./users')

// Routes
router.use('/appointments', appointmentRoutes)
router.use('/users', userRoutes)

module.exports = router