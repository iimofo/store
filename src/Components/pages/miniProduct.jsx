import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

function MiniProduct({ id, name, price, image }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Optionally pass the entire product info if needed.
    dispatch(addToCart({ id, name, price, image }));
  };

  return (
    <div>
      <div className="bg-gray-300 w-50 h-80 flex justify-center items-center flex-col rounded-lg shadow-lg">
        <img src={image} alt={name} className="h-20" />
        <div>{name}</div>
        <div>{price}</div>
        <button
          className="bg-black text-white w-30 h-12 cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MiniProduct;
