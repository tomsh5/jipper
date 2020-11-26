import { userService } from '../services/userService.js'

const _setUser = (user) => ({ type: 'SET_USER', user })
const _spendBalance = (spendAmount) => ({ type: 'SPEND_BALANCE', spendAmount })

export function setUser() {
    return async (dispatch) => {
        const user = await userService.getUser()
        console.log(user);
        dispatch(_setUser(user))
    }
}

export function spendBalance(spendAmount) {
    return (dispatch) => {
        // Update the service/backend
        dispatch(_spendBalance(spendAmount))
    }
}