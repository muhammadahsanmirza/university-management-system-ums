const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const resumeSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true, 
        validate: {
            validator: value => validator.isURL(value),
            message: 'Invalid URL'
        }      
    },
    hashedContent: {
        type: String
    }
}, { timestamps: true });

resumeSchema.pre('save', async function(next) {
    try {
        if (this.isModified('hashedContent')) {
            const saltRounds = 10;
            const hashedContent = await bcrypt.hash(this.hashedContent, saltRounds);
            this.hashedContent = hashedContent;
        }
        return next();
    } catch (error) {
        return next(error);
    }
});

const StudentResume = mongoose.model('StudentResume', resumeSchema);
module.exports = StudentResume;
