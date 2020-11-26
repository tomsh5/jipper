import httpService from './httpService';

export const productService = {
  getProducts,
  getProductById,
  deleteProduct,
  saveProduct,
  getEmptyProduct
}

function getProducts(filterBy = '') {
  console.log('gettin products..');

  if(filterBy){
  var {name} = filterBy;
  const query = `?txt=${name}`;
  return httpService.get(`product/${query}`);
}
else{
  return httpService.get(`product/`);
}
}

function getProductById(_id) {
  return httpService.get(`product/${_id}`)
}

function deleteProduct(_id) {
 return httpService.delete(`product/${_id}`)
}

function _updateProduct(product) {
return httpService.put(`product/${product._id}`, product)
}

function _addProduct(product) {
return httpService.post(`product`, product)
}

function saveProduct(product) {
  return product._id ? _updateProduct(product) : _addProduct(product)
}

function getEmptyProduct() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}