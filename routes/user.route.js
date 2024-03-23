const express = require('express');
const { create } = require('../controllers/user.controller');
const router = express.Router();

router.route('/user').post(create)

module.exports = router