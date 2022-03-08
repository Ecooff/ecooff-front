import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
import basketReducer from "./basketSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        order: orderReducer,
        basket: basketReducer,
    }
})

export default store;