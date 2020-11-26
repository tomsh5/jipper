const INITIAL_STATE = {
    user: null
}

export function UserReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SPEND_BALANCE':
            return {
                ...state,
                user: { ...state.user, balance: state.user.balance - action.spend }
            }
        default:
            return state
    }
}