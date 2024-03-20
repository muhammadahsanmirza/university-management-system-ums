const mongoose = require('mongoose');
const { isBoolean } = require('validator');

const collegeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter college name'],
            trim: true,
            minlength: [2, 'College name must be at least 2 characters'],
            maxlength: [50, 'College name cannot exceed 50 characters'],
        },
        status: {
            type: Boolean,
            default: true,
            required: true,
        },
    },
    { timestamps: true }
);

collegeSchema.pre('validate', function (next) {
    if (this.status !== true && this.status !== false) {
        this.invalidate('status', 'Status must be true or false');
    }
    next();
});

const College = mongoose.model('College', collegeSchema);
module.exports = College;