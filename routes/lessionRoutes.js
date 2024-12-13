const express = require('express');
const router = express.Router();

const lession = require('../controller/lessionController');

router.use('/', lession);

module.exports = router