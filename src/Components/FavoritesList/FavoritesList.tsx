import type { FC } from "react";
import { useSelector } from "react-redux";
import { favoriteBooksSelector } from "../../state/favoriteBooksSlice";
import { BookCard } from "../BookCard/BookCard";


export const FavroritsList:FC=()=>{
    const favoriteBooks=useSelector(favoriteBooksSelector)
    return(
        <div>
            {favoriteBooks.map((book)=><BookCard book={book} key={book.id}/>)}
        </div>
    )
}

