import productsReducer from "./productsReducer";

import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
});
