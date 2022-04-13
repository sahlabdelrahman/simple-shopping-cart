import { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";

const Products = ({ products, addToCart }) => {
  const [product, setProduct] = useState("");

  const handleOpenModal = (product) => {
    setProduct(product);
  };

  const handleCloseModal = () => {
    setProduct("");
  };

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div key={product.id} className="products-item">
          <a href="#" onClick={() => handleOpenModal(product)}>
            <img src={product.imageUrl} alt={product.title} />
          </a>
          <div className="products-desc">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
      <ProductModal product={product} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Products;
