var express = require('express')
var bodyParser = requre('body-parser')
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

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', index)
app.use(cors())

module.exports = app
