const express = require('express');
const router = express.Router();

const athletesRouter = require('./athletes');
const sportsRouter = require('./sports')

router.use('/athletes', athletesRouter);
router.use('/sports', sportsRouter);

module.exports = router;