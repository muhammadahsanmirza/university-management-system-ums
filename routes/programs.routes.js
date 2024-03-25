const express = require('express');

const Program = require('../models/programs.model');
const College = require('../models/colleges.model');

const {
    handlePostProgram
} = require('../controllers/program.controller');
const router = express.Router();

router.post('/', handlePostProgram);


module.exports = router;