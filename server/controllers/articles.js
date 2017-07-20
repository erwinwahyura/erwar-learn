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

var update = function(req, res) {
  let id = req.params._id
  m_article.findById({_id: id}, function(err, resultFind) {
    m_article.findOneAndUpdate({_id: id}, {$set: {title: req.body.title || resultFind.title, content: req.body.content || resultFind.content, category: req.body.category || resultFind.category, author: resultFind.author }}, function(err, result) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(result)
      }
    })
  })
}

var getByAuthor = function(req, res) {
  m_article.find({author: req.params.author}, function(err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
}

var getByCategory = function(req, res) {
  m_article.find({category: req.params.category}, function(err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
}

var remove = function(req, res) {
  m_article.deleteOne({_id: req.params._id}, function(err, result) {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(result)
    }
  })
}

module.exports = {
  add,
  getAll,
  getById,
  update,
  getByAuthor,
  getByCategory,
  remove
}
