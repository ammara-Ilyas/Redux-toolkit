import data from "@/components/sharedData/data";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((data) => {
        return data.id === item.id;
      });
      if (existingItem) {
        alert("Already exist");
      } else {
        state.items.push(item);
      }
    },
    removefromCart(state, action) {
      console.log(action.payload);
      state.items.splice(action.payload, 1);
    },
    increCartItems(state, action) {
      const index = action.payload;
      const updatedItems = state.items.map((data, i) => {
        if (i === index) {
          return {
            ...data,
            quantity: data.quantity + 1,
            totalPrice: data.price * (data.quantity + 1),
          };
        }
        return data;
      });
      state.items = updatedItems;
    },
    decreCartItems(state, action) {
      const index = action.payload;
      const item = state.items[index];

      if (item.quantity > 1) {
        const updatedItems = state.items.map((data, i) => {
          if (i === index) {
            return {
              ...data,
              quantity: data.quantity - 1,
              totalPrice: data.price * (data.quantity + 1),
            };
          }
          return data;
        });
        state.items = updatedItems;
      }
    },
  },
});
export const { addToCart, removefromCart, increCartItems, decreCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
