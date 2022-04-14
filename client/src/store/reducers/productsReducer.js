import {
  FETCH_PRODUCTS,
  FILTER_BY_SIZE,
  FILTER_BY_SORT,
} from "../actions/types";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.data,
        filteredProducts: action.data,
        size: "",
        sort: "",
      };

    case FILTER_BY_SIZE:
      return {
        ...state,
        size: action.data.size,
        filteredProducts: action.data.filteredProducts,
      };

    case FILTER_BY_SORT:
      return {
        ...state,
        sort: action.data.sort,
        filteredProducts: action.data.filteredProducts,
      };
    default:
      return state;
  }
};

export default productsReducer;
