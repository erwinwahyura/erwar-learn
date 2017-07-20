var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/erwar-learn-finalcode');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Database Connected!");
});

var index = require('./routes/index')
var user = require('./routes/users')
var article = require('./routes/articles')

var app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', index)
app.use('/users', user)
app.use('/api/articles', article)

app.listen(3000)

module.exports = app
