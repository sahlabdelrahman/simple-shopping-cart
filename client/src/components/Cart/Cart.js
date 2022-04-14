import { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../Checkout/Checkout";

import Fade from "react-reveal/Fade";

const Cart = (props) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>There is {props.cartItems.length} Items in cart</p>
        )}
      </div>
      <Fade bottom cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="cart-info">
                <div>
                  <p>{item.title}</p>
                  <p>qty: {item.qty}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button onClick={() => props.removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total: $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button onClick={() => setShowCheckoutForm(true)}>
            select products
          </button>
        </div>
      )}
      {showCheckoutForm && (
        <Checkout setShowCheckoutForm={setShowCheckoutForm} />
      )}
    </div>
  );
};

export default Cart;
