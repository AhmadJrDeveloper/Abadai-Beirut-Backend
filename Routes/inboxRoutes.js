const express = require('express')
const app = express();
const router = express.Router()

// Get all messages

router.get('/',(req,res)=>{
    console.log("view all messages");

})


// GET a single Message
router.get('/:id', (req,res)=>{
    console.log("view a single Message");

})
// POST a new Message
router.post('/', (req,res)=>{
    console.log("Add new Message")

})
// DELETE a Message
router.delete('/:id',(req,res)=>{
    console.log("delete a Message")

})


// UPDATE a Message
router.patch('/:id',(req,res)=>{
    console.log("update a message")

})
module.exports = router
