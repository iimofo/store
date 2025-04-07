import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MiniProduct({ id, name, price, image }) {
  const [Favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image }));
  };

  const handlePressFavorite = () => {
    setFavorite(!Favorite);
  };

  return (
    <div>
      <div className="relative bg-gray-100 w-50 h-80 flex justify-center rounded-lg">
        {Favorite ? (
          <FavoriteIcon
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handlePressFavorite}
          />
        ) : (
          <FavoriteBorderIcon
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handlePressFavorite}
          />
        )}
        <div className="flex justify-center items-center flex-col space-y-2">
          <img src={image} alt={name} className="h-30" />
          <div className="px-10 text-center w-full">{name}</div>
          <div className="font-bold">${price}</div>
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
