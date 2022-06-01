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
    updateName: (state, action) => {
      state.user = {
        ...state.user,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    },
    updateAddress: (state, action) => {
      state.user = {
        ...state.user,
        addresses :  action.payload.addresses
        
      };
    }
  },
});

export const { login, logout, register, updateName, updateAddress } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
