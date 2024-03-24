const mongoose = require('mongoose');
const User = require('./Users.model');
const Context = require('./context.model');

const roleSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    contextId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Context' 
    },
    instanceId:{
        type:Number,
        required:true,
    },
    roleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }

});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;