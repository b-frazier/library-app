const router = require('express').Router();
const Book = require('../../models/book');
const Author = require('../../models/author');

// gets all books
router.get('/', async (req, res) => {
  res.render('books/index');
});

// new book
router.get('/new', async (req, res) => {
  try {
    const authors = await Author.find({}).lean();
    const book = new Book();
    res.render('books/new', {
      authors: authors,
      book: book,
    });
  } catch {
    res.redirect('/books');
  }
});

// create book
router.post('/', async (req, res) => {
  res.send('create books');
});

module.exports = router;
