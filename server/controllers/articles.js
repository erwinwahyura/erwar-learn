var m_article = require('../models/articles')

var add = function(req, res) {
  var article = new m_article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  article.save((err, result) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
}

var getAll = function(req, res) {
  m_article.find({}, function(err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
}

var getById = function(req, res) {
  m_article.findOne({_id:req.params._id}, function(err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
}

module.exports = {
  add,
  getAll,
  getById
}
