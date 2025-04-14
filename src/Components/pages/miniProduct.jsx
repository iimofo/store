// MiniProduct.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MiniProduct({ id, name, price, image }) {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image }));
  };

  const handlePressFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="p-4 rounded-lg">
      <div className="relative bg-gray-100 w-50 h-80 flex justify-center rounded-lg">
        {favorite ? (
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
        <div
          name={name}
          className="flex justify-center items-center flex-col space-y-2"
        >
          <Link to={`/product/${id}`} className="cursor-pointer">
            <img src={image} alt={name} className="h-30 block mx-auto" />
            <div className="px-10 text-center w-full">{name}</div>
          </Link>
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
