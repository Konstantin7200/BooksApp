import type { FC } from "react";
import type { Book } from "../../types";
import st from "./BookCard.module.css"
import { useDispatch } from "react-redux";
import { deleteBook, markAsRead } from "../../state/bookSlice";

interface BookCardProps{
    book:Book
}

export const BookCard:FC<BookCardProps>=({book})=>{
    const dispatch=useDispatch();
    return(
        <div className={st.BookCard}>
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
            <button onClick={()=>dispatch(markAsRead(book.id))}>Mark as read</button>
            <button onClick={()=>dispatch(deleteBook(book.id))}>Delete</button>
        </div>
    )
}
