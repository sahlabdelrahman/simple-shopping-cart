import { useEffect, useState } from "react";

import data from "./data/data.json";

import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleFilterBySize = (e) => {
    const value = e.target.value;
    setSize(value);
    if (value === "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(value) !== -1
      );
      setProducts(newProducts);
    }
  };

  const handleFilterBySort = (e) => {
    const value = e.target.value;
    setSort(value);
    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b) => {
      if (value === "lowest") {
        return a.price - b.price;
      } else if (value === "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });

    setProducts(newProducts);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isExist = false;

    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isExist = true;
      }
    });

    if (!isExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }

    setCartItems(cartItemsClone);
  };

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <Filter
            numberOfProducts={products.length}
            size={size}
            sort={sort}
            handleFilterBySize={handleFilterBySize}
            handleFilterBySort={handleFilterBySort}
          />
        </div>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
