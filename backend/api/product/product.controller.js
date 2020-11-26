const productService = require('./product.service')

async function getProduct(req, res) {
    
    const product = await productService.getById(req.params._id)
    res.send(product)
}
  
async function getProducts(req, res) {

    const products = await productService.query(req.query)
    res.send(products)
}

async function deleteProduct(req, res) {
    await productService.remove(req.params._id)
    res.end()
}

async function updateProduct(req, res) {
    const product = req.body;
    await productService.update(product)
    res.send(product)
}

async function addProduct(req, res) {
    const product = req.body;
    await productService.add(product)
    res.send(product)
}

module.exports = {
    getProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    addProduct
}