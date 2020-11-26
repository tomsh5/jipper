import { productService } from "../services/productService"
// Action Creator
const _setProducts = (products) => ({ type: 'SET_PRODUCTS', products })
const _removeProduct = (id) => ({ type: 'REMOVE_PRODUCT', id })

// Action Dispatcher 
export function loadProducts() {
    return async (dispatch, getState) => {
        const products = await productService.getProducts(getState().ProductReducer.filterBy)
        const filterBy = getState().ProductReducer.filterBy
        console.log(filterBy);
        // products.filter(product => product.name === filterBy.name)
        dispatch(_setProducts(products))
    }
}

export function loadCartProducts(){
    return async (getState) => {
    const cartProducts = await getState().ProductReducer.cartProducts
    console.log(cartProducts);
    return cartProducts
    }
}

export function removeProduct(id) {
    return dispatch => {
        return productService.remove(id).then(() => dispatch(_removeProduct(id)))
    }
}

export function setFilter(filterBy) {
    return dispatch => {
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}
export function addToCart(product) {
    return dispatch => {
        dispatch({ type: 'ADD_CART', product })
    }
}