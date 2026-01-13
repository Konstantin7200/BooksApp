import type { FC } from "react";
import type { Book } from "../../types";
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
        <div className="border-black border-1 flex flex-col items-center rounded-md overflow-hidden">
            <span className="cursor-pointer" onClick={handleClick}>{isFavorite?"★":"☆"}</span>
            <h1 className="text-4xl font-bold pb-4">{book.name}</h1>
            <div className="grid grid-cols-2 grid-rows-4 w-full">
                <h2 className="text-2xl font-semibold text-right">{book.author}</h2>
                <p className="text-2xl text-right">{book.genre}</p>
                <p className="text-2xl text-right">{book.publishingYear}</p>
                <p className="text-2xl text-right">{book.status}</p>
                <img className="row-span-full" src={book.coverUrl} alt={"Cover of "+book.name}/>
            </div>
            {book.description&&<p className="p-4">{book.description}</p>}
            <div className="flex flex-row w-full justify-between">
            <button className="w-full border-black border-1 p-2 cursor-pointer text-black hover:bg-blue-200 transition duration-300" onClick={()=>dispatch(markAsRead(book))}>Mark as read</button>
            <button className="w-full border-black border-1 p-2 cursor-pointer text-black hover:bg-red-300 transition duration-300" onClick={()=>dispatch(deleteBook(book))}>Delete</button>
            <button className="w-full border-black border-1 p-2 cursor-pointer text-black hover:bg-blue-200 transition duration-300" onClick={()=>dispatch(setBookToEdit(book))}>Edit</button>
            </div>
        </div>
    )
}
