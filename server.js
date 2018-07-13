// Packages
const Bundler = require('parcel-bundler')
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// Bundler Config=
const insertionFile = path.join(__dirname, 'client', 'index.html')

// Initialize a new bundler using a file and options
const bundler = new Bundler(insertionFile, {})

// Route Definitions
const indexRouter = require('./routes')

// Port config
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/codetutor')

// Initialize Express
const app = express()

app.use(bundler.middleware())

// Routes Index
app.use(indexRouter)

// Start the API server
app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}!`))
