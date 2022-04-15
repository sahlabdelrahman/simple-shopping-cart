import productsReducer from "./productsReducer";

import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
