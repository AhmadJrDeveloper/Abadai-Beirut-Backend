const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    console.log("get all categories")
})

router.get('/:id', (req, res) => {
    console.log("get all categories")
})

router.post('/', (req, res) => {
    console.log("add category")
})

router.delete('/:id', (req, res) => {
    console.log("delete category")
})

router.patch('/:id', (req, res) => {
    console.log("update category")
})

module.exports = router;