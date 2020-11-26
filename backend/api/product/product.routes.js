const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getProduct, getProducts, deleteProduct, updateProduct,addProduct} = require('./product.controller')
const router = express.Router()


router.get('/', getProducts)
router.get('/:_id', getProduct)
router.post('/', addProduct)
router.put('/:_id',updateProduct)
router.delete('/:_id',requireAdmin, deleteProduct)

module.exports = router