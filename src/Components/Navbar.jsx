import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    // Remove the token to log out the user
    localStorage.removeItem("token");
    // Optionally, navigate the user to the login page or homepage
    navigate("/login");
  };

  const Tabs = [
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="bg-white-300 flex border-b">
      <div className="justify-center items-center h-16 w-full space-x-2.5 flex">
        <Link to="/">
          <img src="src/assets/react.svg" alt="logo" />
        </Link>
        {Tabs.map((t, index) => (
          <Link key={index} to={t.path} className="px-5 cursor-pointer">
            {t.name}
          </Link>
        ))}
      </div>
      <div className="justify-center items-center h-16 w-full space-x-3 flex">
        <Link to="/contact">
          <div className="cursor-pointer">Contact sales</div>
        </Link>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="cursor-pointer bg-white p-2 border rounded-md hover:rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="cursor-pointer bg-white p-2 border rounded-md hover:rounded-none">
              Log in
            </button>
          </Link>
        )}
        <Link to="/register">
          <button className="cursor-pointer bg-black text-white p-2 border rounded-md hover:rounded-none">
            Get started free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
