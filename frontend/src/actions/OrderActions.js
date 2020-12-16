import { orderService } from "../services/orderService"

// Action Creator
const _setOrder = (order) => ({ type: 'SET_ORDER', order })
const _addOrder = (order) => ({ type: 'ADD_ORDER', order })


// Action Dispatcher 
export function loadOrder() {
    console.log('loading order..');
    return async (dispatch) => {
        let order = await orderService.getOrder()
        console.log(order[0].products);
        order = order[0].products
        console.log(order);
        dispatch(_setOrder(order))
    }
}

export function addToOrder(){
    console.log('product in store:');
}