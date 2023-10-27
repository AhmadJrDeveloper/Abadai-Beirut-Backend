const express = require('express')
const app = express();

const router = express.Router()

router.get('/', (req,res) => {
    res.json({mssg:'gets all the messages'})
})

router.get('/:id', (req,res) => {
    res.json({mssg:'get a single message'})
})

router.delete('/:id', (req,res) => {
    res.json({mssg:'delete a single message'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg:'update a single message'})
})

router.post('/:id', (req,res) => {
    res.json({mssg:'create a new message'})
})

module.exports = router