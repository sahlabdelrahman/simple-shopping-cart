import Modal from "react-modal";

const CartModal = (props) => {
  const { order, handleCloseModal, cartItems } = props;

  return (
    <>
      {order && (
        <Modal isOpen={order} onRequestClose={() => handleCloseModal()}>
          <span className="close-icon" onClick={() => handleCloseModal()}>
            &times;
          </span>
          <div className="order-info">
            <p className="order-success">order done successfully</p>
            <table>
              <tr>
                <td>Name: </td>
                <td>{order.name}</td>
              </tr>
              <tr>
                <td>Email: </td>
                <td>{order.email}</td>
              </tr>
              <tr>
                <td>Total: </td>
                <td>
                  {cartItems.reduce((a, p) => {
                    return a + p.price;
                  }, 0)}
                </td>
              </tr>
              <tr>
                <td>Selected Items: </td>
                <td>
                  {cartItems.map((item) => (
                    <>
                      <p>Number of this products: {item.qty}</p>
                      <p>Title of product: {item.title}</p>
                    </>
                  ))}
                </td>
              </tr>
            </table>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CartModal;
