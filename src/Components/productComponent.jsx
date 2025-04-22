import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { updateCartQty, removeFromCart } from "../actions/cartActions";
import { updateCartQty, removeFromCart } from "./actions/cartActions";

export default function ProductComponent({ id, name, image, price }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((s) =>
    s.cart.cartItems.find((i) => i.id === id)
  );
  const qty = cartItem?.qty || 0;

  const increase = () => {
    if (qty > 0) {
      dispatch(updateCartQty(id, qty + 1));
    } else {
      dispatch(updateCartQty(id, 1));
    }
  };

  const decrease = () => {
    if (qty > 1) {
      dispatch(updateCartQty(id, qty - 1));
    } else if (qty === 1) {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <img src={image} alt={name} className="h-16 w-16 object-cover" />
      <div className="flex-1 ml-4">
        <h3 className="font-medium">{name}</h3>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={decrease} disabled={qty === 0}>
          −
        </button>
        <span>{qty}</span>
        <button onClick={increase}>＋</button>
      </div>
      {qty > 0 && (
        <button
          onClick={() => dispatch(removeFromCart(id))}
          className="ml-4 text-red-500"
        >
          ×
        </button>
      )}
    </div>
  );
}
