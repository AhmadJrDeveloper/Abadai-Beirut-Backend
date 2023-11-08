const express = require('express')
const app = express();
const router = express.Router()
const upload = require('../Middleware/multer')
const {getProducts,addProduct, deleteProduct, viewProduct, editProduct,getBestsellers,getProductsByCategory} = require('../Controllers/productsController')


// Get all Products

router.get('/',getProducts);
// GET a single Products
router.get('/:id', viewProduct)
// POST a new Products
router.post('/', upload.single('image'),addProduct);
// DELETE a Product
router.delete('/:id',deleteProduct);

// get bestsellers
router.get('/bestsellers/recommend',getBestsellers)

// UPDATE a Product
router.patch('/:id',upload.single('image'),editProduct);

// get products by category ID
router.get('/byCategoryId/:id',getProductsByCategory)
module.exports = router
