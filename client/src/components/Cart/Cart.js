import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../../css/Cart/Cart.css";
import CartModal from "./CartModal";
import Checkout from "../Checkout/Checkout";

import Fade from "react-reveal/Fade";

import { removeFromCart } from "../../store/actions/cart";
import { clearOrder, createOrder } from "../../store/actions/order";
import { staticData } from "../../data/static-data";

const Cart = () => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const order = useSelector((state) => state.order.order);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    dispatch(createOrder(order));
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCloseModal = () => {
    dispatch(clearOrder());
    setShowCheckoutForm(false);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>
            {staticData.cartHeader}: {cartItems.length}{" "}
          </p>
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
                  <p>
                    {staticData.qty}: {item.qty}
                  </p>
                  <p>
                    {staticData.price}: ${item.price}
                  </p>
                </div>
                <button onClick={() => dispatch(removeFromCart(item))}>
                  {staticData.removeBtn}
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
            {staticData.selectProducts}
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
