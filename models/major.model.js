const mongoose = require('mongoose');
const Program = require('./programs.model');
const majorSchema = new mongoose.Schema({
    major: {
        type: String,
        required: [true, 'Please enter major'],
        trim: true,
        minlength: [3, 'major name must be at least 3 characters']
    },
    pragramId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Program',
        validate: {
            validator: async function (value) {
                const program = await Program.findById(value);
                return program !== null;
            },
            message: 'Invalid program ID',
        },
    },
    status: {
        type: Boolean,
        default: true,
        required: true,
    }
},{timestamps : true});
const Major = mongoose.model('Major', majorSchema);
module.exports = Major;