const router = require('express').Router();

const authors = require('./authorsRoutes');

router.use('/authors', authors);

module.exports = router;
