import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS } from "./types";

export const fetchOrders = () => {
  return (dispatch) => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_ORDERS,
          data: {
            orders: data,
          },
        });
      });
  };
};

export const createOrder = (order) => {
  return (dispatch) => {
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: CREATE_ORDER,
          data: {
            order: data,
          },
        });
      });

    localStorage.clear("cartItems");
  };
};

export const clearOrder = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ORDER,
    });

    dispatch({
      type: CLEAR_CART,
    });
  };
};
