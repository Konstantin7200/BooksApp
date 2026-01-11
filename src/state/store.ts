import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookSlice";
import { favoriteBooksReducer } from "./favoriteBooksSlice";


export const store=configureStore({
    reducer:{
        books:bookReducer,
        favoriteBooks:favoriteBooksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;