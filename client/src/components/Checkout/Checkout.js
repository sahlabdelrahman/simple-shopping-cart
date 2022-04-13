import { useState } from "react";
import "../../css/Checkout/Checkout.css";
import Input from "../Input/Input";

const Checkout = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="checkout-form">
      <span
        onClick={() => props.setShowCheckoutForm(false)}
        className="close-icon"
      >
        &times;
      </span>
      <form>
        <Input
          type="text"
          label="Name"
          name="name"
          handleChange={handleChange}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          handleChange={handleChange}
        />
        <div>
          <button type="submit" onClick={handleSubmit}>
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
