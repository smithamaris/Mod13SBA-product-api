const express = require('express')
const { createProduct, getProductById, updateProduct, deleteProduct, getAllProducts } = require('../controllers/productControllers');


const router = express.Router()

//create
router.post('/', createProduct)

//get all products
router.get('/', getAllProducts)

// get/retrieve one product by id
router.get('/', getProductById)

//update
router.put('/', updateProduct)

//delete 
router.delete('/', deleteProduct)



module.exports = router;