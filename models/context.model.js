const mongoose = require('mongoose');
const contextSchema = new mongoose.Schema({
    context: {
        type: String,
        required: [true, 'Please enter context'],
        trim: true,
        minlength: [5, 'context must be at least 5 characters']
    },
},{timestamps : true});
const Context = mongoose.model('Context', contextSchema);
module.exports = Context;