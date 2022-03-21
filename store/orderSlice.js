import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
  },
  reducers: {
    myOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { myOrder } = orderSlice.actions;
export const selectOrder = (state) => state.order.order;
export default orderSlice.reducer;