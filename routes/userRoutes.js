const express = require('express');
const router = express.Router();

const login = require('../controller/userController');

router.use('/', login);

module.exports = router