const INITIAL_STATE = {
    order: null
}

export function OrderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.cartProducts]
            }
        case 'SET_ORDER':
            console.log(action.order);
            return {
                ...state,
                order: action.order
            }
        default:
            return state    
    }
}