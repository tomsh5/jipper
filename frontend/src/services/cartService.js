import httpService from './httpService';

export const productService = { 
  getCartProducts,
  getCartProductById,
  deleteCartProduct,
  saveCartProduct,
}

function getCartProducts() {
  return httpService.get(`cartProduct/`);
}

function getCartProductById(_id) {
  return httpService.get(`cartProduct/${_id}`)
}

function deleteCartProduct(_id) {
 return httpService.delete(`cartProduct/${_id}`)
}

function _updateCartProduct(cartProduct) {
return httpService.put(`cartProduct/${cartProduct._id}`, cartProduct)
}

function _addProduct(cartProduct) {
return httpService.post(`cartProduct`, cartProduct)
}

function saveCartProduct(cartProduct) {
  return product._id ? _updateCartProduct(cartProduct) : _addProduct(cartProduct)
}
