const mongoose = require('mongoose')
const validator = require("validator");

const opportunitiesSchema = new mongoose.Schema({

},{timestamps:true});


const Opportunities = mongoose.model('Opportunities',opportunitiesSchema);
module.exports = Opportunities;