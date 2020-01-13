const express = require('express') // exporting express modules
const app = express()
const logger = require('morgan') // HTTP request logger middleware for node.js

// Setting up middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.static(__dirname + '/client/build/'))

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

// listening on 3001 for backend
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})