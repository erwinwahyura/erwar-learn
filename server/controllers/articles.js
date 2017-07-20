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

module.exports = {
  add
}
