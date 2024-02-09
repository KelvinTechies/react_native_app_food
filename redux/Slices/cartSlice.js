import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = action.payload;
    },
    removeFrmCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex);
      } else {
        console.log("Cant re move the item that is not added to cart");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFrmCart, emptyCart } = cartSlice.actions;

const selectCartItems = (state) => state.cart.items;
const selectCartItemsById = (state, id) =>
  state.cart.items.filter((item) => item.id == id);
const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total = total + item.price), 0);

export default cartSlice;
