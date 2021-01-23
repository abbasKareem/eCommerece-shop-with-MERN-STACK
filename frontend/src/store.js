import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailReducer,
} from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducer'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  useruPdateProfileReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: useruPdateProfileReducer,
})

// if there is a cartItems in local storage then parse it to object , else cartItemsFromStorage = empty array
const cartItemsFromStorge = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorge = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initalState = {
  cart: { cartItems: cartItemsFromStorge },
  userLogin: { userInfo: userInfoFromStorge },
}
const middleWare = [thunk]
const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
