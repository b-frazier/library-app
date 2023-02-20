const router = require('express').Router();
const Book = require('../../models/book');

// gets all books
router.get('/', async (req, res) => {
  res.send('All books');
});

// new book
router.get('/new', (req, res) => {
  res.send('new books');
});

// create book
router.post('/', async (req, res) => {
  res.send('create books');
});

module.exports = router;
