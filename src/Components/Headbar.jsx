import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

function Headbar() {
  return (
    <>
      <div className="h-20 items-center flex justify-center bg-white ">
        <img src="src/assets/logo.png" alt="logo" />
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
        <div className="flex cursor-pointer text-gray-500 ml-20 ">
          <div className="text-black">Home</div>
          <div className="ml-15 hover:text-black">About</div>
          <div className="ml-15 hover:text-black">Contact us</div>
          <div className="ml-15 hover:text-black">Blog</div>
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
