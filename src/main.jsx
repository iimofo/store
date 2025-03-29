import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/pages/login.jsx";
import Home from "./Components/Home/Home.jsx";
import Shopping from "./Components/pages/shopping.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<App />} />
        <Route path="/pricing" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/contact" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<App />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/shoppingcart" element={<Shopping />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
