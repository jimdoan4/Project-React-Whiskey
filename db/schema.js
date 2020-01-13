const mongoose = require("./connection.js"); // Requiring connection
const Schema = mongoose.Schema;

const WhiskeySchema = new Schema({
  name: {
    type: String,
    default: "Brand"
  },
  description: {
    type: String,
    default: "Brief information"
  },
  image: {
    type: String,
    default: "Photo Image"
  },
  value: {
    type: String,
    default: "Price"
  }
});


const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  whiskeys: [WhiskeySchema]
});

module.exports = {
  WhiskeySchema: WhiskeySchema,
  UserSchema: UserSchema
};
