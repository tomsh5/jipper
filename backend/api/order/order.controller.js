const orderProductService = require('./order.service')

async function getOrderProduct(req, res) {
    
    const orderProduct = await orderProductService.getById(req.params._id)
    res.send(orderProduct)
}
  
async function getOrderProducts(req, res) {
    console.log(req);
    const orderProducts = await orderProductService.query()
    res.send(orderProducts)
}

async function deleteOrderProduct(req, res) {
    await orderProductService.remove(req.params._id)
    res.end()
}

async function updateOrderProduct(req, res) {
    const orderProduct = req.body;
    await orderProductService.update(orderProduct)
    res.send(orderProduct)
}

async function addOrderProduct(req, res) {
    const orderProduct = req.body;
    await orderProductService.add(orderProduct)
    res.send(orderProduct)
}

module.exports = {
    getOrderProduct,
    getOrderProducts,
    deleteOrderProduct,
    updateOrderProduct,
    addOrderProduct
}