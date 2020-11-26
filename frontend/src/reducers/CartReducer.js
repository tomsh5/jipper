const INITIAL_STATE = {
    cartProducts: null
}

export function CartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.cartProducts]
            }
    }
}