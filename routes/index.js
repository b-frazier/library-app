const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const authors = require('./authorsRoutes');

router.use('/', homeRoutes);
router.use('/authors', authors);

module.exports = router;
