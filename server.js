require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const categoriesRoutes = require('./Routes/categoriesRoutes');
const inboxRoutes = require('./Routes/inboxRoutes');
const productsRoutes = require('./Routes/productsRoutes');
const adminRoutes = require('./Routes/adminRoutes');

const app = express();


// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => 
  {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('conected to db & listening on port', process.env.PORT)
    })

  })

  .catch((error) =>
  {
    console.error(error)
  })

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
  });
  


// 90sgWJPPUSGvn1XB
// abadai


app.use('/api/categories',categoriesRoutes);
app.use('/api/products',productsRoutes);
app.use('/api/inbox',inboxRoutes);
app.use('/api/admin',adminRoutes);
