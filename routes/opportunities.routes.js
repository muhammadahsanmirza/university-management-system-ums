const express = require('express');
const Opportunity = require('../models/opportunities.model');
const Program = require('../models/programs.model');
const College = require('../models/colleges.model');
const router = express.Router();

const {
    handlePostOpportunity,
    handleFindOpportunitiesByProgramId
} = require('../controllers/opportunities.controller');

router.post('/', handlePostOpportunity);

router.get('/program/:programId', handleFindOpportunitiesByProgramId);

module.exports = router;