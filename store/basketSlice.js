import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: null,
  },
  reducers: {
    myBasket: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { myBasket } = basketSlice.actions;
export const selectBasket = (state) => state.basket.basket;
export default basketSlice.reducer;