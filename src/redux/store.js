import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// configureStore is predefined function to create store
// reducer is a predefined key to hold reducer to update state in store

export const store = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})