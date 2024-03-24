const mongoose = require('mongoose')
const {isEmail} = require("validator");
const Program = require('./programs.model');

const opportunitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter opportunity name'],
        trim: true,
        minlength: [2, 'Opportunity name must be at least 2 characters'],
        maxlength: [50, 'Opportunity name cannot exceed 50 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide opportunity description'],
        trim: true,
        minlength: [10, 'Opportunity description must be at least 10 characters'],
    },
    programId:{
        type : mongoose.Types.ObjectId,
        ref: 'Program',
        validate: {
            validator: async function (value) {
                const program = await Program.findById(value);
                return program !== null;
            },
            message: 'Invalid program ID',
        },
    },
    eligibility: {
        type: String,
        required: [true, 'Please provide eligibility'],
        trim: true,
        enum:['Graduate','Masters','Doctorate'],
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        trim: true,
        lowercase: true,
        validate: {
            validator: isEmail,
            message: "{VALUE} is not a valid email",
        },
    },
    externalLink: {
        type: String,
        required: [true, 'Please provide External Link'],
        trim: true,
        minlength: [5, 'External Link must be at least 10 characters'],
    },
    contactPerson: {
        type: String,
        required: [true, 'Please provide contact person'],
        minlength:[5,'Contact Person must have more than 5 characters'],
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    startDate: {
        type: Date,
        required: [true, 'Please provide start date'],
    },
    endDate: {
        type: Date,
        required: [true, 'Please provide end date'],
    },    
},{timestamps:true});



const Opportunity = mongoose.model('Opportunity',opportunitySchema);
module.exports = Opportunity;