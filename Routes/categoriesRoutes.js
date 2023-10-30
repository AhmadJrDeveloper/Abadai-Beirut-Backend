const express = require('express')
const {createCategory, getCategory, getCategories, deleteCategory, updateCategory} = require('../Controllers/categoriesController')
const upload = require('../Middleware/multer')
const router = express.Router()

router.get('/', getCategories)

router.get('/:id', getCategory)

router.post('/',upload.single('image'), createCategory)

router.delete('/:id', deleteCategory)

router.patch('/:id',upload.single('image'), updateCategory)

module.exports = router