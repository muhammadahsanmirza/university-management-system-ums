const express = require('express');

const Program = require('../models/programs.model');
const College = require('../models/colleges.model');

const router = express.Router();
router.post('/', async (req, res) => {
    if (!req.body.collegeId) {
        return res.status(400).json({ error: 'College ID is required' });
    }
    try {
        const program = new Program(req.body);
        await program.save();
        return res.status(201).json({ message: 'Program Added'});
    } catch (error) {
        return res.status(500).json({ message: error.message || 'error in creating program entry'});
    }
});
module.exports = router;