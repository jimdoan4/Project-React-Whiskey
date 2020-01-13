const mongoose = require("./connection.js"); // Requiring connection
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  whiskeys: [SneakerSchema]
});

module.exports = {
  UserSchema: UserSchema
};
