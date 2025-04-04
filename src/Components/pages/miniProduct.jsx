import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MiniProduct({ id, name, price, image }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image }));
  };

  return (
    <div>
      <div className="relative bg-gray-100 w-50 h-80 flex justify-center rounded-lg">
        <FavoriteBorderIcon className="absolute right-2 top-3 text-gray-400" />
        <div className="flex justify-center items-center flex-col space-y-2">
          <img src={image} alt={name} className="h-20" />
          <div className="px-10">{name}</div>
          <div>${price}</div>
          <button
            className="bg-black text-white w-40 h-12 cursor-pointer rounded-lg"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniProduct;
