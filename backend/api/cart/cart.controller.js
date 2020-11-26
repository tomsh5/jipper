const cartProductService = require('./cart.service')

async function getCartProduct(req, res) {
    
    const cartProduct = await cartProductService.getById(req.params._id)
    res.send(cartProduct)
}
  
async function getCartProducts(req, res) {

    const cartProducts = await CartProductService.query(req.query)
    res.send(cartProducts)
}

async function deleteCartProduct(req, res) {
    await CartProductService.remove(req.params._id)
    res.end()
}

async function updateCartProduct(req, res) {
    const cartProduct = req.body;
    await CartProductService.update(cartProduct)
    res.send(cartProduct)
}

async function addCartProduct(req, res) {
    const cartProduct = req.body;
    await CartProductService.add(cartProduct)
    res.send(cartProduct)
}

module.exports = {
    getCartProduct,
    getCartProducts,
    deleteCartProduct,
    updateCartProduct,
    addCartProduct
}