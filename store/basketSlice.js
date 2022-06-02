import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: 0,
  },
  reducers: {
    updateBasket: (state, action) => {
      state.basket = action.payload;
    },
  },
});

export const { updateBasket } = basketSlice.actions;
export const selectBasket = (state) => state.basket.basket;
export default basketSlice.reducer;