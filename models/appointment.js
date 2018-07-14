const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  appointStart: {
    type: Date,
    required: true
  },
  appointEnd: {
    type: Date,
    required: true
  }
})

const Appointment = mongoose.model("Appointment", appointmentSchema)

module.exports = Appointment