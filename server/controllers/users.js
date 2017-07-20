var m_user = require('../models/users')
var bcrypt = require('bcrypt')
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds)
var jwt = require('jsonwebtoken')
require('dotenv').config()

var signin = function(req, res, next) {
  var password = req.body.password
  m_user.findOne({username: req.body.username}, function(err, user_result) {
    if (err) {
      res.status(500).send(err)
    }
    else if (user_result) {
      bcrypt.compare(password, user_result.password)
      .then(result => {
        if(result) {
          var token = jwt.sign({id: user_result._id, username: user_result.username}, process.env.SECRETKEY)
          res.send({token, username: user_result.username})
        } else {
          res.send({msg: "password salah"})
        }
      })
      .catch(err => {
        res.send(err)
      })
    } else {
      res.send({msg:" user not found"})
    }
  })
}

var signup = function(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, salt)

  var user = new m_user({
    username: req.body.username,
    password: hash
  })
  user.save((err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var cekUser = function(req, res, next) {
  let token = req.headers.token
  console.log(token);
  if(token) {
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
      console.log('ini decoded ', decoded);
      if(decoded.id == req.params.id) {
        next()
      } else {
        res.send(err)
      }
    })
  } else {
    res.send({msg: 'Login please!'})
  }
}

module.exports = {
  signin,
  signup,
  cekUser
}
