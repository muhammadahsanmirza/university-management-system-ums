const express = require('express');
const Opportunities = require('../models/opportunities.model');
const Program = require('../models/programs.model');
const College = require('../models/colleges.model');
const router = express.Router();

router.post('/', async (req, res) => {
    if(!req.body.programId) return res.status(400).send('Program Id is required');
    try {
        const opportunities = new Opportunities(req.body);
        await opportunities.save();
        return res.status(201).send(opportunities);
    } catch (error) {
        return res.status(500).send({'error':error.message || 'Error in creating opportunity'});
    }
});

router.get('/program/:programId', async (req, res) => {
    const { programId } = req.params;
    try {
        const opportunities = await Opportunities.find({ programId }).populate({ path: 'collegeId', options: { strictPopulate: false }});

        return res.status(200).send(opportunities);
    } catch (error) {
        return res.status(500).send({ error: error.message || 'Error in getting opportunities' });
    }
});

module.exports = router;