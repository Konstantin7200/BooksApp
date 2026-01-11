import type { FC } from "react";
import type { Book } from "../../types";
import st from "./BookCard.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, markAsRead, setBookToEdit } from "../../state/bookSlice";
import {  type RootState } from "../../state/store";
import { addBook, isFavoriteBookSelector, removeBook } from "../../state/favoriteBooksSlice";

interface BookCardProps{
    book:Book
}

export const BookCard:FC<BookCardProps>=({book})=>{
    const dispatch=useDispatch();
    const isFavorite=useSelector((state:RootState)=>isFavoriteBookSelector(state,book.id))
    const handleClick=()=>{
        if(isFavorite)
            dispatch(removeBook(book))
        else
            dispatch(addBook(book))
    }
    return(
        <div className={st.BookCard}>
            <span style={{cursor:'pointer'}} onClick={handleClick}>{isFavorite?"★":"☆"}</span>
            <h1>{book.name}</h1>
            <div className={st.GridCont}>
                <h2>{book.author}</h2>
                <h2>{book.genre}</h2>
                <h2>{book.publishingYear}</h2>
                <h2>{book.status}</h2>
                <img src={book.coverUrl} alt={"Cover of "+book.name}/>
            </div>
            <p>{book.description}</p>
            <p>{book.id}</p>
            <button onClick={()=>dispatch(markAsRead(book))}>Mark as read</button>
            <button onClick={()=>dispatch(deleteBook(book))}>Delete</button>
            <button onClick={()=>dispatch(setBookToEdit(book))}>Edit</button>
        </div>
    )
}
