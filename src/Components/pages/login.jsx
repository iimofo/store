import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      setMessage("Login successful");
      // Store the token in localStorage or state for further use
      localStorage.setItem("token", response.data.token);
      // Redirect to the home page
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("Error logging in");
    }
  };

  return (
    <div className="bg-[#C7B9FF] h-screen">
      <form onSubmit={handleLogin}>
        <div className="justify-center items-center flex h-screen flex-col ">
          <div className="border justify-center items-center flex flex-col p-10 bg-white rounded-md">
            <div className="flex mb-5">
              <label className="block">Email:</label>
              <input
                type="text"
                className="bg-gray-200 border"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="flex mb-5">
              <label className="block">Password:</label>
              <input
                type="password"
                className="bg-gray-200 border"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-black text-white p-2 border rounded-md w-[150px] text-center"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
