import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bounce from "react-reveal";

import "../../css/Products/Products.css";
import ProductModal from "./ProductModal";

import { fetchProducts } from "../../store/actions/products";
import { addToCart } from "../../store/actions/cart";
import { staticData } from "../../data/static-data";

const Products = () => {
  const [product, setProduct] = useState("");

  const handleOpenModal = (product) => {
    setProduct(product);
  };

  const handleCloseModal = () => {
    setProduct("");
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Bounce left cascade>
      <div className="products-wrapper">
        {products &&
          products.map((product) => (
            <div key={product.id} className="products-item">
              <a href="#" onClick={() => handleOpenModal(product)}>
                <img src={product.imageUrl} alt={product.title} />
              </a>
              <div className="products-desc">
                <p>{product.title}</p>
                <span>${product.price}</span>
              </div>
              <button onClick={() => dispatch(addToCart(product))}>
                {staticData.addToCart}
              </button>
            </div>
          ))}
        <ProductModal product={product} handleCloseModal={handleCloseModal} />
      </div>
    </Bounce>
  );
};

export default Products;
