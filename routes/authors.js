const router = require('express').Router();

// gets all authors
router.get('/', (req, res) => {
  res.render('authors/index');
});

// new author
router.get('/new', (req, res) => {
  res.render('authors/new');
});

// create author
router.post('/', (req, res) => {
  res.render('create');
});

module.exports = router;
