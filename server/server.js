require('dotenv').config();
const port = process.env.SERVER_PORT || 8000;

const express = require('express');
const app = express();
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
module.exports = app;