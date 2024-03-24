const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter role name'],
        trim: true,
        minlength: [3, 'role name must be at least 3 characters'],
        maxlength: [50, 'role name cannot exceed 50 characters'],
    },
    shortName: {
        type: String,
        required: [true, 'Please enter short name'],
        trim: true,
        minlength: [3, 'short name must be at least 3 characters'],
        maxlength: [20, 'short name cannot exceed 20 characters'],
    },
},{timestamps : true});
const Role = mongoose.model('Role', roleSchema);
module.exports = Role;