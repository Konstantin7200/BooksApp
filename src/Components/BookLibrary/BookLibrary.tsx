import type { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../state/store";
import { BookCard } from "../BookCard/BookCard";
import st from "./BookLibrary.module.css"

export const BookLibrary:FC=()=>{
    const book=useSelector((state:RootState)=>state.books)
    return(
        <div className={st.BookLibrary}>
            {book.books.map((book)=><BookCard book={book} key={book.id}/>)}
        </div>
    )
}