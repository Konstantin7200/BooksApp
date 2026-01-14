import type { FC } from "react";
import { useSelector } from "react-redux";
import { favoriteBooksSelector } from "../../state/favoriteBooksSlice";
import { BookCard } from "../BookCard/BookCard";


export const FavroritsList:FC=()=>{
    const favoriteBooks=useSelector(favoriteBooksSelector)
    return(
        <div className="flex flex-col gap-2 items-center">
            <h1 className="font-bold text-3xl">Favorites</h1>
            {favoriteBooks.map((book)=><BookCard book={book} key={book.id}/>)}
        </div>
    )
}

