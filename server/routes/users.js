var express = require('express')
var router = express.Router()
var c_user = require('../controllers/users')

router.post('/signup', c_user.signup) 
router.post('/signin', c_user.signin)

module.exports = router
