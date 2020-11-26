const INITIAL_STATE = {
    products: null,
    filterBy: null,
    cartProducts: null
}

export function ProductReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product]
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.id)
            }
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map(product => product._id === action.product._id ? action.product : product)
            }

        case 'ADD_CART':
            console.log(action.product);
            console.log(state.cartProducts);
            if (state.cartProducts) {
                return {
                    ...state,
                    cartProducts: [state.cartProducts, action.product]
                }
            }
            else {
                return {
                    ...state,
                    cartProducts: [action.product]
                }
            }


        default:
            return state
    }

}