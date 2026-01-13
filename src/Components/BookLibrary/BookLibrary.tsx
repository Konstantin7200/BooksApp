import type { FC } from "react";
import { useSelector } from "react-redux";
import { BookCard } from "../BookCard/BookCard";
import st from "./BookLibrary.module.css"
import { filteredBooksSelector } from "../../state/bookSlice";
import { FilterBar } from "../FilterBar/FIlterBar";
import SortBar from "../SortBar/SortBar";

export const BookLibrary:FC=()=>{
    const books=useSelector(filteredBooksSelector)
    return(
        <div className={st.BookLibrary}>
            <FilterBar/>
            <SortBar/>
            {books.map((book)=><BookCard book={book} key={book.id}/>)}
        </div>
    )
}