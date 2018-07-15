const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  fName: {
    type: String,
    required: true
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  classCode: {
    type: String,
    required: true
  },
  gitHub: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User