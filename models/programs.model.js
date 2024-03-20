const mongoose = require('mongoose');
const { isString } = require('validator');
const College = require('./colleges.model');

const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Program name'],
        trim: true,
        minlength: [2, 'Program name must be at least 2 characters'],
        maxlength: [50, 'Program name cannot exceed 50 characters'],
        validate: {
            validator: isString,
            message: 'Program name must be a string',
        },
    },
    description: {
        type: String,
        required: [true, 'Please provide program description'],
        trim: true,
        minlength: [10, 'Program description must be at least 10 characters'],
        validate: {
            validator: isString,
            message: 'Description must be a string',
        },
    },
    collegeId: {
        type: mongoose.Types.ObjectId,
        ref: 'College',
        required: [true, 'A program should belong to a College'],
    },
}, { timestamps: true });

const Program = mongoose.model('Program', programSchema);
module.exports = Program;
