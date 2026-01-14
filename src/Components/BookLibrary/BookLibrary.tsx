import type { FC } from "react";
import { useSelector } from "react-redux";
import { BookCard } from "../BookCard/BookCard";
import { filteredBooksSelector } from "../../state/bookSlice";
import { FilterBar } from "../FilterBar/FIlterBar";
import SortBar from "../SortBar/SortBar";

export const BookLibrary:FC=()=>{
    const books=useSelector(filteredBooksSelector)
    return(
        <div className="flex flex-col gap-2 items-center">
            <h1 className="font-bold text-3xl">Library</h1>
            <FilterBar/>
            <SortBar/>
            {books.map((book)=><BookCard book={book} key={book.id}/>)}
        </div>
    )
}