import httpService from './httpService';
import storageService from './storageService';

export const orderService = {
  addItemtoCart,
  getOrder,
  removeItemFromCart,
  add,
  clearCart
};


async function addItemtoCart(item) {
  const addeditem = await storageService.post(`order`, item);
  return addeditem
}

async function getOrder() {
  const itemsInCart = await storageService.query(`order`);
  return itemsInCart
}

async function removeItemFromCart(item) {
  const items = await storageService.remove(`order`, item);
  return items

}

async function add(order) {
  const savedOrder =await httpService.post('order',order)
  return savedOrder
}

async function clearCart() {
  storageService.clearStorage('order')
}

// export const orderService = { 
//   getOrder,
//   getOrderById,
//   deleteOrder,
//   saveOrder,
// }

// // function getOrder() {
// //   console.log('getting order on service');
// //   return httpService.get(`order/`);
// // }

// // function getOrderById(_id) {
// //   return httpService.get(`order/${_id}`)
// // }

// // function deleteOrder(_id) {
// //  return httpService.delete(`order/${_id}`)
// // }

// // function _updateOrder(order) {
// // return httpService.put(`order/${order._id}`, order)
// // }

// // function _addOrder(order) {
// // return httpService.post(`order`, order)
// // }

// // function saveOrder(order) {
// //   return order._id ? _updateOrder(order) : _addOrder(order)
// // }
