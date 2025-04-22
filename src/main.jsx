import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./Components/pages/login.jsx";
import Home from "./Components/Home/Home.jsx";
import Shopping from "./Components/pages/shopping.jsx";
import Headbar from "./Components/Headbar/Headbar.jsx";
import Checkout from "./Components/checkout.jsx";
import AllProducts from "./Components/allProducts.jsx";
import ProductDetails from "./ProductDetails.jsx";
import store from "./Components/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Headbar />
      <Outlet />
    </>
  );
}

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "pricing", element: <Home /> },
      { path: "products", element: <AllProducts /> },
      { path: "contact", element: <Home /> },
      { path: "shoppingcart", element: <Shopping /> },
      { path: "blog", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "checkout", element: <Checkout /> },
      { path: "product/:id", element: <ProductDetails /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Login /> },
];

const router = createBrowserRouter(routes, {
  future: { v7_startTransition: true },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
