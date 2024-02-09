import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/Slices/cartSlice";
import { restaurantSlice } from "./redux/Slices/restaurant";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    restaurant: restaurantSlice,
  },
});

export default store;
