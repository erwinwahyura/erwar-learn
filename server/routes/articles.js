var express = require('express')
var router = express.Router()
var c_user = require('../controllers/users')
var c_article = require('../controllers/articles')

router.post('/', c_user.cekUser, c_article.add)
router.get('/', c_article.getAll)
router.get('/:_id', c_article.getById)
router.put('/:_id', c_user.cekUser, c_article.update)
router.get('/:author', c_article.getByAuthor)
router.get('/:category', c_article.getByCategory)
router.delete('/:_id', c_article.remove)

module.exports = router
