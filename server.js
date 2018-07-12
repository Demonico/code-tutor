// Packages
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose")

// Route Definitions
const indexRouter = require('./routes/index')

// Port config
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express()

// Express Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routes Index
app.use('/', indexRouter)

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/codetutor"
)

// Start the API server
app.listen(PORT, () =>
  console.log(`API Server now listening on PORT ${PORT}!`)
)
