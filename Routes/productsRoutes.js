const express = require('express')
const app = express();
const router = express.Router()
const {getProducts,addProduct, deleteProduct, viewProduct, editProduct, viewByCategory,searchProduct} = require('../Controllers/productsController')


// Get all Products

router.get('/',getProducts);


// GET a single Products
router.get('/:id', viewProduct)
// POST a new Products
router.post('/', addProduct);
// DELETE a Product
router.delete('/:id',deleteProduct);

// Get all products that belongs to a certain category id
router.get('/byCategory/:id', viewByCategory)

// Search for a product by name or description
router.get('/:search?', searchProduct);


// UPDATE a Product
router.patch('/:id',editProduct)
module.exports = router
