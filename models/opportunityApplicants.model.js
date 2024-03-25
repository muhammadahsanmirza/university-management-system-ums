const mongoose = require('mongoose');
const Opportunity = require('./opportunities.model');
const User = require('./models/users.model');

const opportunityApplicantsSchema = new mongoose.Schema({
    opportunityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Opportunity',
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

const OpportunityApplicant = mongoose.model('OpportunityApplicant', opportunityApplicantsSchema);
module.exports = OpportunityApplicant;