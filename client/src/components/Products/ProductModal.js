import Modal from "react-modal";

const ProductModal = ({ product, handleCloseModal }) => {
  return (
    <Modal isOpen={product}>
      <span className="close-icon" onClick={() => handleCloseModal()}>
        &times;
      </span>
      <div className="product-modal">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p>${product.price}</p>
      </div>
    </Modal>
  );
};

export default ProductModal;
