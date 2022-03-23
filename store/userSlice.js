import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;