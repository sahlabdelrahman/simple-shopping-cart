import "../../css/Checkout/Checkout.css";
import Input from "../Input/Input";

import Zoom from "react-reveal/Zoom";
import { staticData } from "../../data/static-data";

const Checkout = (props) => {
  return (
    <div className="checkout-form">
      <span
        onClick={() => props.setShowCheckoutForm(false)}
        className="close-icon"
      >
        &times;
      </span>
      <Zoom>
        <form>
          <Input
            type="text"
            label={staticData.name}
            name="name"
            handleChange={props.handleChange}
          />
          <Input
            type="email"
            label={staticData.email}
            name="email"
            handleChange={props.handleChange}
          />
          <div>
            <button type="submit" onClick={props.handleSubmit}>
              {staticData.checkout}
            </button>
          </div>
        </form>
      </Zoom>
    </div>
  );
};

export default Checkout;
