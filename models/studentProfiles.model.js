const mongoose = require('mongoose');
const User = require('./models/users.model');
const Program = require('./programs.model');
const Major = require('./major.model');
const StudentResume = require('./studentResumes.model');


const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    programId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Program',
    },
    majorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Major',
    },
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StudentResume',
    },


    },{timestamps:true});

    const StudentProfile = mongoose.model('StudentProfile',profileSchema);
    module.exports = StudentProfile;