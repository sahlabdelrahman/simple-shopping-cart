import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";

import reducer from "./reducers/reducer";

const initialState = {};

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  enhancer(applyMiddleware(reduxThunk))
);

export default store;
