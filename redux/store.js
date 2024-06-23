import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import contactSlice from "./slice/contactSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    contact: contactSlice,
  },
});
