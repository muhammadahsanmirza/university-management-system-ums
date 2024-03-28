const { isValidObjectId } = require('mongoose');

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

const handleDeleteOpportunity = async (req, res) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).send({ error: 'Invalid user ID format.' });
    }
    try {
        const opportunity = await Opportunity.findById(req.params.id);
        if (!opportunity) {
            return res.status(404).send({ error: 'Invalid Id' })
        }
        await opportunity.deleteOne();
        return res.status(200).send({ message: 'Opportunity deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" })
    }
}
module.exports = {
    handlePostOpportunity,
    handleFindOpportunitiesByProgramId,
    handleDeleteOpportunity
};
