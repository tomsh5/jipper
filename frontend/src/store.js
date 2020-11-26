import { ProductReducer } from './reducers/ProductReducer'
import { UserReducer } from './reducers/UserReducer'
// import { CartReducer } from './reducers/CartReducer'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
// Only if you have a number of reducers:
const rootReducer = combineReducers({
    // contactModule: ProductReducer,
    ProductReducer,
    UserReducer,
    // CartReducer
})
// This is only for the redux dev tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))