import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../module/auth/core/authSlice"
const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;