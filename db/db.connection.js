const mongoose = require('mongoose');

require('dotenv').config();
const dbURI= process.env.MONGODB_URI;
const dbConnection = (async ()=>{
    await mongoose.connect(dbURI);
    console.log(`DB Connection at ${dbURI}`);
})();

module.exports = dbConnection;