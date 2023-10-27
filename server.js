require('dotenv').config()
const express = require('express');
const categoriesRoutes = require('./Routes/categoriesRoutes')
const inboxRoutes = require('./Routes/inboxRoutes')
const productsRoutes = require('./Routes/productsRoutes')
const adminRoutes = require('./Routes/adminRoutes')

//express app
const app = express();
const mongoose = require('mongoose');


//connecting to mongo db//

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`connected to db & running on port`, process.env.PORT );
    }); 
})
.catch((error) => {
    console.error(error);
})

//middlewear function//

app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use('/api/categories', categoriesRoutes)
app.use('/api/inbox', inboxRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/admin', adminRoutes)
