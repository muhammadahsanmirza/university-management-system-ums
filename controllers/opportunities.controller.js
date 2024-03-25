const Opportunity = require('../models/opportunities.model');
const Program = require('../models/programs.model');
const College = require('../models/colleges.model');

const handlePostOpportunity = async (req, res) => {
    if (!req.body.programId) return res.status(400).send('Program Id is required');
    try {
        const opportunity = new Opportunity(req.body);
        await opportunity.save();
        return res.status(201).send(opportunity);
    } catch (error) {
        return res.status(500).send({ 'error': error.message || 'Error in creating opportunity' });
    }
}

const handleFindOpportunitiesByProgramId = async (req, res) => {
    const { programId } = req.params;
    try {
        const opportunity = await Opportunity.find({ programId }).populate({ path: 'collegeId', options: { strictPopulate: false } });

        return res.status(200).send(opportunity);
    } catch (error) {
        return res.status(500).send({ error: error.message || 'Error in getting opportunities' });
    }
}
module.exports = {
    handlePostOpportunity,
    handleFindOpportunitiesByProgramId
};
