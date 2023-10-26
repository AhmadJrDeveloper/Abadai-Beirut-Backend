const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    console.log("get all products")
})

router.get('/:id', (req, res) => {
    console.log("get all products")
})

router.post('/', (req, res) => {
    console.log("add products")
})

router.delete('/:id', (req, res) => {
    console.log("delete products")
})

router.patch('/:id', (req, res) => {
    console.log("update products")
})

module.exports = router;