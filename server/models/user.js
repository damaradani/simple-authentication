const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: String,
  password: String
},{
  timestamps: true
})

mongoose.model('User', UserSchema)

module.exports = mongoose.model('User', UserSchema)
