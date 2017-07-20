var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'please fill inspect']
  },
  content: {
    type: String,
    required: [true, 'please fill inspect']
  },
  category: {
    type: String,
    required: [true, 'please fill inspect']
  },
  author: { type: Schema.Types.ObjectId, ref: 'User'}
})

var article = mongoose.model('Article', articleSchema)

module.exports = article
