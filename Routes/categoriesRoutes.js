const express = require('express')
const app = express();
const router = express.Router()

// Get all Categories

router.get('/',(req,res)=>{
    res.json({message:"view all categories", status:200});

})


// GET a single Category
router.get('/:id', (req,res)=>{
    res.json({message:"view a single categories"})

})
// POST a new Category
router.post('/', (req,res)=>{
    res.json({message:"Add new Category"})

})
// DELETE a Category
router.delete('/:id',(req,res)=>{
    res.json({message:"delete a Category"})


})


// UPDATE a Category
router.patch('/:id',(req,res)=>{
    res.json({message:"view all categories"})


})
module.exports = router
