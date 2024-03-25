const express = require('express');

const College = require('../models/colleges.model');
const {
    handlePostCollege,
} = require('../controllers/college.controller');
const router = express.Router();
router.post('/', handlePostCollege);
module.exports = router;