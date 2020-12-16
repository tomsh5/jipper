import { ProductReducer } from './reducers/ProductReducer'
import { UserReducer } from './reducers/UserReducer'
import { OrderReducer } from './reducers/OrderReducer'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
// Only if you have a number of reducers:
const rootReducer = combineReducers({
    // contactModule: ProductReducer,
    ProductReducer,
    UserReducer,
    OrderReducer
})
// This is only for the redux dev tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))