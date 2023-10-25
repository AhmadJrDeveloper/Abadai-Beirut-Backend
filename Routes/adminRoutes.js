const express = require('express')
const app = express();
const router = express.Router()
const authenticate = require('../Controllers/adminController');

// check the password and username
router.post('/signin', authenticate)

module.exports = router
