import {
  ADD_TO_CART,
  UPDATE_CART_QTY,
  REMOVE_FROM_CART,
} from "../actions/cartActions";

const initialState = {
  cartItems: [],  // each item: { id, name, image, price, qty }
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const exists = state.cartItems.find(i => i.id === newItem.id);

      if (exists) {
        // merge into existing: bump qty
        return {
          ...state,
          cartItems: state.cartItems.map(i =>
            i.id === newItem.id
              ? { ...i, qty: i.qty + newItem.qty }
              : i
          ),
        };
      }
      // totally new
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };
    }

    case UPDATE_CART_QTY: {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        // remove if zero
        return {
          ...state,
          cartItems: state.cartItems.filter(i => i.id !== id),
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.map(i =>
          i.id === id ? { ...i, qty } : i
        ),
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(i => i.id !== action.payload),
      };

    default:
      return state;
  }
}