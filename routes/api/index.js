const router = require('express').Router();

const authors = require('./authorsRoutes');
const books = require('./booksRoutes');

router.use('/authors', authors);
router.use('/books', books);

module.exports = router;
