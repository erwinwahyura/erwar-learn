var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'please fill inspect']
  },
  password: {
    type: String,
    required: [true, 'please fill inspect']
  }
})

var user = mongoose.model('User', userSchema)

module.exports = user
