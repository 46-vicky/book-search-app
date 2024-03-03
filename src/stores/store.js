import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";
import authorReducer from "./authorSlice";


export const store = configureStore({
    reducer : {
        books : booksReducer,
        author : authorReducer,
    },
})