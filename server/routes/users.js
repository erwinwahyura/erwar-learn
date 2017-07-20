var express = require('express')
var router = express.Router()
var c_user = require('../controllers/users')

router.post('/signup', c_user.signup)
router.post('/signin', c_user.signin)
router.get('/', c_user.getAllUser)

module.exports = router
