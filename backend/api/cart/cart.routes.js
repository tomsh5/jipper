const express = require('express')
const {getCartProduct, getCartProducts, deleteCartProduct, updateCartProduct,addCartProduct} = require('./cart.controller')
const router = express.Router()


router.get('/', getCartProducts)
router.get('/:_id', getCartProduct)
router.post('/', addCartProduct)
router.put('/:_id',updateCartProduct)
router.delete('/:_id',deleteCartProduct)

module.exports = router