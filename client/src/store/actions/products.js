import { FETCH_PRODUCTS, FILTER_BY_SIZE, FILTER_BY_SORT } from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};

export const filterBySize = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.filter(
      (p) => p.sizes.indexOf(value) !== -1
    );
    dispatch({
      type: FILTER_BY_SIZE,
      data: {
        size: value,
        filteredProducts: value === "ALL" ? products : newProducts,
      },
    });
  };
};

export const filterBySort = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b) => {
      if (value === "lowest") {
        return a.price - b.price;
      } else if (value === "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });

    dispatch({
      type: FILTER_BY_SORT,
      data: {
        sort: value,
        filteredProducts: newProducts,
      },
    });
  };
};
