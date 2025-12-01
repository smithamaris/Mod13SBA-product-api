const express = require('express')
const { createProduct, getProductById, updateProduct, deleteProduct, getAllProducts } = require('../controllers/productControllers');


const router = express.Router()

//create
router.post('/', createProduct)

// get/retrieve one product by id
router.get('/:id', getProductById)

//update
router.put('/:id', updateProduct)

//get all products
router.get('/', getAllProducts)

//delete 
router.delete('/:id', deleteProduct)


module.exports = router;