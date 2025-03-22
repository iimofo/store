import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Headbar from "./Components/Headbar";

function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {/* <Navbar /> */}
      <Headbar />
      <div className="bg-[#C7B9FF] h-screen">
        <h1 className="text-5xl ml-50 pt-50">Figma favorites</h1>
        <div className="ml-50 mt-7">
          Search through some of our curated and most popular templates.
        </div>
        <Link to="/">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="cursor-pointer bg-black text-white p-2 border rounded-md hover:rounded-none mt-7 ml-50 w-[150px] text-center "
          >
            {hovered ? "-> See more" : "See more"}
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
