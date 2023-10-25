const express = require('express')
const app = express();
const router = express.Router()
const {getProducts,addProduct, deleteProduct, viewProduct, editProduct} = require('../Controllers/productsController')


// Get all Products

router.get('/',getProducts);


// GET a single Products
router.get('/:id', viewProduct)
// POST a new Products
router.post('/', addProduct);
// DELETE a Product
router.delete('/:id',deleteProduct);


// UPDATE a Product
router.patch('/:id',editProduct)
module.exports = router
