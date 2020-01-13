require('dotenv').config() // Connecting mongoose and mongodb
const mongoose = require('mongoose') // Setting up mongoose connection

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect(
    'mongodb://localhost/project-react-whiskey',
    { useNewUrlParser: true }
  )
}

mongoose.connection.on('error', err => { // if error, populate error message
  console.error('MongoDB connection error: ', err)
  process.exit(-1)
})

mongoose.connection.once('open', () => { // if successfully connected, populate connected message
  console.log('Mongoose has connected to MongoDB')
})

module.exports = mongoose
