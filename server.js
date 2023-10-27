//////////////////IMPORTING ROUTES/////////////////////////////////
                                                                 //
const inboxRoutes = require ('./Routes/inboxRoutes')             //
//////////////////IMPORTING ROUTES/////////////////////////////////



//////////////////CREATING THE SERVER//////////////////
const express = require('express');                  //
const app = express();                               //
const cors = require ('cors')                        //
app.use(cors())                                      //
//////////////////CREATING THE SERVER//////////////////



/////////////////DECLARING THE PORT////////////////////////
require('dotenv').config();                              //
const port = process.env.PORT                            //
app.listen(port,()=>{                                    //
    console.log(`The server is working on port ${port}`) //
})                                                       //
 /////////////////DECLARING THE PORT///////////////////////


//////////////////CREATING MIDDLEWARE//////////////////////
app.use(express.json())                                  //
app.use((req, res, next) => {                            //
  console.log(req.path, req.method)                      //
  next()                                                 //
})                                                       //
//////////////////CREATING MIDDLEWARE//////////////////////



//////////////////CONNECT TO DB////////////////////////////
const mongoose = require("mongoose")                     //
const uri = process.env.URI                              //       
mongoose.connect(uri);                                   //
//////////////////CONNECT TO DB////////////////////////////



//////////////////CHECKING CONN////////////////////////////
mongoose.connection.on('connected', () => {              //
    console.log('Connected to MongoDB');                 //
  });                                                    //
                                                         //
  mongoose.connection.on('error', (err) => {             //
    console.error('Mongoose connection error:', err);    //
  });                                                    //
                                                         //
  mongoose.connection.on('disconnected', () => {         //
    console.log('Mongoose disconnected from MongoDB');   //
  });                                                    //
//////////////////CHECKING CONN////////////////////////////


//////////////////USING THE ROUTES/////////////////////////
                                                         //
app.use('/api/inbox',inboxRoutes)                        //
//////////////////USING THE ROUTES/////////////////////////
