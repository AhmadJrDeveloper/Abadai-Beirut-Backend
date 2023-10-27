const express = require('express')
const {createCategory, getCategory, getCategories, deleteCategory, updateCategory} = require('../Controllers/categoriesController')

const router = express.Router()

router.get('/', getCategories)

router.get('/:id', getCategory)

router.post('/', createCategory)

router.delete('/:id', deleteCategory)

router.patch('/:id', updateCategory)

module.exports = router