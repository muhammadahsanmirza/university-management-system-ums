const mongoose = require('mongoose');
const { isBoolean, isString } = require('validator');

const CollegeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter college name'],
            trim: true,
            minlength: [2, 'College name must be at least 2 characters'],
            maxlength: [50, 'College name cannot exceed 50 characters'],
            validate: {
                validator: isString,
                message: 'Name must be a string',
            },
        },
        status: {
            type: Boolean,
            default: true,
            required: true,
            validate: {
                validator: isBoolean,
                message: 'College Status must be a boolean',
            },
        },
    },
    { timestamps: true }
);

CollageSchema.pre('validate', function (next) {
    if (this.status !== true && this.status !== false) {
        this.invalidate('status', 'Status must be true or false');
    }
    next();
});

const College = mongoose.model('College', CollegeSchema);
module.exports = College;