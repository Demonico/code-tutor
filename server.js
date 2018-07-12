// Packages
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

// Route Definitions
const indexRouter = require('./routes/index')

// Initialize Express
const app = express()

// Express Config
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Routes Index
app.use('/', indexRouter)

