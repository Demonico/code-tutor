// Packages
const Bundler = require('parcel-bundler')
const express = require('express')
const path = require('path')
// Bundler Config=
const insertionFile = path.join(__dirname, 'client', 'index.html')
const { devOpts, prodOpts } = require('./parcel-options')

// Initialize a new bundler using a file and options
const options = process.env.NODE_ENV !== 'production' ? devOpts : prodOpts
const bundler = new Bundler(insertionFile, {})

// Route Definitions
const indexRouter = require('./routes')

// Port config
const PORT = process.env.PORT || 3000

// Initialize Express
const app = express()

app.use(bundler.middleware())

// Routes Index
app.use(indexRouter)

// Start the API server
app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}!`))
