import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
