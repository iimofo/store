import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { Link } from "react-router-dom";

function Headbar() {
  return (
    <>
      <div className="h-20 items-center flex justify-center bg-white border-b border-gray-300">
        <Link to="/">
          <span>CYPER</span>
        </Link>

        <div className="ml-20">
          <input
            type="text"
            className="rounded w-80 h-10 pl-8 bg-[#F5F5F5]"
            placeholder="Search"
            style={{
              backgroundImage: "url('src/assets/Vector.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10px center",
            }}
          />
        </div>
        <div className="flex cursor-pointer text-gray-500 ml-20 space-x-7">
          <Link to="/">
            <div className="text-black">Home</div>
          </Link>
          <Link to="/about">
            <div className="ml-15 hover:text-black">About</div>
          </Link>
          <Link to="/contact">
            <div className="ml-15 hover:text-black">Contact us</div>
          </Link>
          <Link to="/blog">
            <div className="ml-15 hover:text-black">Blog</div>
          </Link>
        </div>
        <div className="flex ml-20 cursor-pointer text-black space-x-4">
          <FavoriteBorderOutlinedIcon />
          <ShoppingCartOutlinedIcon />
          <Person2OutlinedIcon />
        </div>
      </div>
    </>
  );
}

export default Headbar;
