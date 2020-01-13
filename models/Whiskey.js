const { WhiskeySchema } = require('../db/schema.js')
const mongoose = require('../db/connection.js')

module.exports = mongoose.model('Whiskey', WhiskeySchema)