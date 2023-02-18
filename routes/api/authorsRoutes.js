const router = require('express').Router();
const Author = require('../../models/author');

// gets all authors
router.get('/', (req, res) => {
  res.render('authors/index');
});

// new author
router.get('/new', (req, res) => {
  res.render('authors/new', {
    author: new Author(),
  });
});

// create author
router.post('/', (req, res) => {
  res.render('create');
});

module.exports = router;
