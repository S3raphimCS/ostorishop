import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          JSON.stringify(item.options) ===
            JSON.stringify(action.payload.options)
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; options?: ItemOption[] }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            JSON.stringify(item.options) ===
              JSON.stringify(action.payload.options)
          )
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        options?: ItemOption[];
        quantity: number;
      }>
    ) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          JSON.stringify(item.options) ===
            JSON.stringify(action.payload.options)
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const selectCartItemCount = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
