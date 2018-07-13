const path = require('path')
const router = require('express').Router()
// const apiRoutes = require("./api");

const distPath = path.join(__dirname, '..', 'dist')

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.get('/', (req, res) => res.sendFile(path.join(distPath, 'index.html')))

module.exports = router
