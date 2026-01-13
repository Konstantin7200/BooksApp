import type { FC } from "react";
import { useSelector } from "react-redux";
import { favoriteBooksSelector } from "../../state/favoriteBooksSlice";
import { BookCard } from "../BookCard/BookCard";
import st from "./FavoritesList.module.css"

export const FavroritsList:FC=()=>{
    const favoriteBooks=useSelector(favoriteBooksSelector)
    return(
        <div className={st.FavoritesList}>
            {favoriteBooks.map((book)=><BookCard book={book} key={book.id}/>)}
        </div>
    )
}

