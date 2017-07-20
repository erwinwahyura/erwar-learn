var express = require('express')
var router = express.Router()
var c_user = require('../controllers/users')
var c_article = require('../controllers/articles')

router.post('/', c_user.cekUser, c_article.add)
router.get('/', c_article.getAll)

module.exports = router
