import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../css/Cart/Cart.css";
import Checkout from "../Checkout/Checkout";

import Fade from "react-reveal/Fade";

import { removeFromCart } from "../../store/actions/cart";
import CartModal from "./CartModal";

const Cart = (props) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [value, setValue] = useState("");
  const [order, setOrder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrder(value);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCloseModal = () => {
    setOrder(false);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>There is {cartItems.length} Items in cart</p>
        )}
      </div>

      <CartModal
        cartItems={cartItems}
        order={order}
        handleCloseModal={handleCloseModal}
      />

      <Fade bottom cascade>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="cart-info">
                <div>
                  <p>{item.title}</p>
                  <p>qty: {item.qty}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      {cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total: $
            {cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button onClick={() => setShowCheckoutForm(true)}>
            select products
          </button>
        </div>
      )}
      {showCheckoutForm && (
        <Checkout
          setShowCheckoutForm={setShowCheckoutForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Cart;
