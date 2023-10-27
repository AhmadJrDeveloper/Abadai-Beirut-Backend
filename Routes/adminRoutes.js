const express = require('express')
const app = express();
const router = express.Router()
const {authenticate, addAdmin} = require('../Controllers/adminController');
const Admin = require('../Models/Admin');

// check the password and username
router.post('/signin', authenticate)



// Create a new record
router.post('/addRecord',addAdmin);

module.exports = router
