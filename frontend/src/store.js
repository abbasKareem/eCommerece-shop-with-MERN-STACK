import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailReducer,
} from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
})

// if there is a cartItems in local storage then parse it to object , else cartItemsFromStorage = empty array
const cartItemsFromStorge = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initalState = {
  cart: { cartItems: cartItemsFromStorge },
}
const middleWare = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
