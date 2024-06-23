import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registeredList: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addToRgisteredList(state, action) {
      const register = action.payload;
      const alreadyRegistered = state.registeredList.find((data) => {
        return data.id === register.id;
      });
      if (alreadyRegistered) {
        toast.error("Already exist in cart!", {
          theme: "dark",
        });
      } else {
        state.registeredList.push({
          id: Math.floor(Math.random() * 10000) + 1,
          ...registeredList,
        });
      }
    },
  },
});
export const { addToRgisteredList } = contactSlice.actions;
export default contactSlice.reducer;
