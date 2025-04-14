// index.js (or wherever your routing is defined)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/pages/login.jsx";
import Home from "./Components/Home/Home.jsx";
import Shopping from "./Components/pages/shopping.jsx";
import Headbar from "./Components/Headbar/Headbar.jsx";
import Checkout from "./Components/checkout.jsx";
import store from "./Components/store.js";
import { Provider } from "react-redux";
import AllProducts from "./Components/allProducts.jsx";
import ProductDetails from "./ProductDetails.jsx"; // <-- Import your new component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Headbar />
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/shoppingcart" element={<Shopping />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Route for product details */}
            <Route path="/product/:id" element={<ProductDetails />} />
          </Route>

          {/* Auth routes without the main layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
