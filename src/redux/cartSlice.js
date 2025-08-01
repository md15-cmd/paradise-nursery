import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalItems++;
        state.totalPrice += action.payload.price;
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity++;
        state.totalItems++;
        state.totalPrice += item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity === 1) {
        state.items = state.items.filter(i => i.id !== action.payload);
        state.totalItems--;
        state.totalPrice -= item.price;
      } else {
        item.quantity--;
        state.totalItems--;
        state.totalPrice -= item.price;
      }
    },
    deleteItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== item.id);
      }
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;