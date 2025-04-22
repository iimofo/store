export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_QTY = "UPDATE_CART_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (item, qty = 1) => ({
  type: ADD_TO_CART,
  payload: { ...item, qty },
});

export const updateCartQty = (id, qty) => ({
  type: UPDATE_CART_QTY,
  payload: { id, qty },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
