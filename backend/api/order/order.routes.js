const express = require('express')
const {getOrderProduct, getOrderProducts, deleteOrderProduct, updateOrderProduct,addOrderProduct} = require('./order.controller')
const router = express.Router()


router.get('/', getOrderProducts)
router.get('/:_id', getOrderProduct)
router.post('/', addOrderProduct)
router.put('/:_id',updateOrderProduct)
router.delete('/:_id',deleteOrderProduct)

module.exports = router