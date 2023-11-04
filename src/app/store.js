
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";
import authSliceReducer from '../feature/auth/authSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        
    },
    middleware: (getDefaultMiddlewares) => (
        getDefaultMiddlewares().concat(apiSlice.middleware)
    ),
})