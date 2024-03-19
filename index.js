const express  = require('express');
require('dotenv').config(); 
const app = express();
const port = process.env.SERVER_PORT || 8000;
const mongoose = require('mongoose');
const dbConnection = require('./db/db.connection');
// const server = require('./server/server');



app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

const userRouter = require('./routes/user.routes');
app.use('/users',userRouter);


const server  = app.listen(port, () => { 
    console.log(`Server is running on ${port}`);
} );
