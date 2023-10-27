const {authenticate, addAdmin} = require('../Controllers/adminController');


// check the password and username
router.post('/signin', authenticate)



// Create a new record
router.post('/addRecord',addAdmin);

// Create a new record
router.post('/addRecord',addAdmin);

module.exports = router