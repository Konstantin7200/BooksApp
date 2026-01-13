import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../types";
import type { RootState } from "./store";
import { booksSelector, deleteBook, markAsRead, saveBook } from "./bookSlice";

interface initialInterface{
    favoriteBooks:Book[]
}

const initialState:initialInterface={
    favoriteBooks:[]
}

export const favoriteBooksSelector=(state:RootState)=>state.favoriteBooks.favoriteBooks
export const isFavoriteBookSelector=createSelector(
    [
        favoriteBooksSelector,
        (state:RootState,bookId:number)=>bookId,
        booksSelector
    ],
    (favoriteBooks,bookId)=>{
        return favoriteBooks.some((book)=>book.id==bookId)
    }
)

const favoriteBooksSlice=createSlice({
    name:'favoriteBooks',
    initialState,
    reducers:{
        addBook:(state,action:PayloadAction<Book>)=>{
            state.favoriteBooks.push(action.payload)
        },
        removeBook:(state,action:PayloadAction<Book>)=>{
            state.favoriteBooks=state.favoriteBooks.filter((book)=>book.id!==action.payload.id)
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(deleteBook,(state,action:PayloadAction<Book>)=>{
                state.favoriteBooks=state.favoriteBooks.filter((book)=>book.id!==action.payload.id)
            })
            .addCase(saveBook,(state,action:PayloadAction<Book>)=>{
                state.favoriteBooks=state.favoriteBooks.map((book)=>book.id===action.payload.id?action.payload:book)
            })
            .addCase(markAsRead,(state,action)=>{
                state.favoriteBooks=state.favoriteBooks.map((book)=>book.id===action.payload.id?{
                ...book,
                status:'Already read'
            }:book)},
            )
    }
})

export const favoriteBooksReducer=favoriteBooksSlice.reducer
export const {addBook,removeBook}=favoriteBooksSlice.actions