const mongoose = require('mongoose');
const College = require('./colleges.model');

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Program name'],
        trim: true,
        minlength: [2, 'Program name must be at least 2 characters'],
        maxlength: [50, 'Program name cannot exceed 50 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide program description'],
        trim: true,
        minlength: [10, 'Program description must be at least 10 characters'],
    },
    collegeId: {
        type: mongoose.Types.ObjectId,
        ref: 'College',
        required: [true, 'A program should belong to a College'],
        validate: {
            validator: async function (collegeId) {
                const college = await College.findById(collegeId);
                return college !== null;
            },
            message: 'Invalid college ID',
        },
    },
}, { timestamps: true });

const Program = mongoose.model('Program', programSchema);
module.exports = Program;
