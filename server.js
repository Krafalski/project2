// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
require('dotenv').config()

// PORT
const PORT = process.env.PORT

// Database connection string
const MONGODB_URI = process.env.MONGODB_URI

// connect to database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Error / success
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware

app.use(express.static('public'))

// get data from forms as objects - access to key value pairs in req.body
app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method')) //allows us to do delete(DELETE), update(PUT)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
