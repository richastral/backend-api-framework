const express = require('express');
const { test, testCreate, testWithId } = require('../controllers/test.controller');
const router = express.Router();

router.route('/test').get(test)
router.route('/testCreate').post(testCreate)
router.route('/test/:id').get(testWithId)

module.exports = router