import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/pages/login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<App />} />
        <Route path="/pricing" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/contact" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
