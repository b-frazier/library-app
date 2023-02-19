const router = require('express').Router();
const Author = require('../../models/author');

// gets all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find({}).lean();
    res.render('authors/index', { authors: authors });
  } catch {
    res.redirect('/');
  }
});

// new author
router.get('/new', (req, res) => {
  res.render('authors/new', {
    author: new Author(),
  });
});

// create author
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`);
    res.redirect('authors');
  } catch {
    res.render('authors/new', {
      author: author,
      errorMessage: 'Error creating author',
    });
  }
});

module.exports = router;
