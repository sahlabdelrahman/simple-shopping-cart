import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;

    const cartItemsClone = [...cartItems];
    let isExist = false;

    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isExist = true;
      }
    });

    if (!isExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }

    dispatch({
      type: ADD_TO_CART,
      data: {
        cartItems: cartItemsClone,
      },
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItemsClone));
  };
};

export const removeFromCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const cartItemsClone = [...cartItems];
    const cartItemsUpdated = cartItemsClone.filter((p) => p.id !== product.id);

    dispatch({
      type: REMOVE_FROM_CART,
      data: {
        cartItems: cartItemsUpdated,
      },
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItemsUpdated));
  };
};
