import { useRef, useState, type FC, type FormEvent } from "react";
import type { Book, Genres, Statuses } from "../../types";
import { useDispatch } from "react-redux";
import { addBook, saveBook } from "../../state/bookSlice";

interface BookFormProps{
    book?:Book
}

export const BookForm:FC<BookFormProps>=({book})=>{
    const genres:Genres[]=["Fantasy", "Sci-Fi", "Romance", "Mystery", "Thriller", "Horror", "Historical Fiction", "Biography", "Self-Help", "History"]
    const statuses:Statuses[]=['Reading',"Want to read","Already read"]
    const dispatch=useDispatch();
    const nameRef=useRef<HTMLInputElement>(null)
    const yearRef=useRef<HTMLInputElement>(null)
    const authorRef=useRef<HTMLInputElement>(null)
    const descriptionRef=useRef<HTMLInputElement>(null)
    const coverRef=useRef<HTMLInputElement>(null)
    const genreRef=useRef<HTMLSelectElement>(null)
    const statusRef=useRef<HTMLSelectElement>(null)
    const [errorMessage,setErrorMessage]=useState("")

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()

        let errorMessage=""
        if(!nameRef.current?.value)
            errorMessage+="name,"
        if(!yearRef.current?.value)
            errorMessage+="year of publishing,"
        if(!authorRef.current?.value)
            errorMessage+="author,"
        if(!coverRef.current?.value)
            errorMessage+="coverURL,"
        if(!genreRef.current?.value)
            errorMessage+="genre,"
        if(!statusRef.current?.value)
            errorMessage+="status,"
        if(errorMessage!=="")
        {
            setErrorMessage("Please input "+errorMessage.substring(0,errorMessage.length-1)+".")
        }
        else{
            const createdBook:Book={
                name:nameRef.current!.value,
                author:authorRef.current!.value,
                genre:genreRef.current!.value as Genres,
                status:statusRef.current!.value as Statuses,
                publishingYear:Number(yearRef.current!.value),
                coverUrl:coverRef.current!.value,
                description:descriptionRef.current!.value,
                id:book?book.id:12
            }
            if(book)
                dispatch(saveBook(createdBook));
            else{
                dispatch(addBook(createdBook))
            }
        }

    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="BooksName">
                Books name
                <input defaultValue={book?.name} ref={nameRef} type='text' id="BooksName" />
            </label>
            <label htmlFor="year">
                Publishing year
                <input defaultValue={book?.publishingYear} ref={yearRef} type='number' id="year" />
            </label>
            <label htmlFor="author">
                Author
                <input defaultValue={book?.author} ref={authorRef } type='text' id="author" />
            </label>
            <label htmlFor="description">
                Description
                <input defaultValue={book?.description} ref={descriptionRef} type="text" id="description" />
            </label>
            <label htmlFor="coverUrl">
                Covers URL
                <input defaultValue={book?.coverUrl} ref={coverRef} type='text' id="coverUrl" />
            </label>
            <label htmlFor="genre">
                Genre
                <select defaultValue={book?.genre} ref={genreRef} id="genre">
                    <option value=''>Pick genre</option>
                    {genres.map((genre)=><option value={genre} key={genre}>{genre}</option>)}
                </select>
            </label>
            <label htmlFor="status">
                Status
                <select defaultValue={book?.status} ref={statusRef} id="status">
                    <option value=''>Pick status</option>
                    {statuses.map((status)=><option value={status} key={status}>{status}</option>)}
                </select>
            </label>
            <button type="submit">{book?"Save book":"Add book"}</button>
            <p>{errorMessage}</p>
        </form>
    )
}