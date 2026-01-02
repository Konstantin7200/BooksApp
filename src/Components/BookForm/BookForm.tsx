import { useRef, useState, type FC, type FormEvent } from "react";
import type { Book, Genres, Statuses } from "../../types";
import { useDispatch } from "react-redux";
import { addBook } from "../../state/bookSlice";


export const BookForm:FC=()=>{
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
            const book:Book={
                name:nameRef.current!.value,
                author:authorRef.current!.value,
                genre:genreRef.current!.value as Genres,
                status:statusRef.current!.value as Statuses,
                publishingYear:Number(yearRef.current!.value),
                coverUrl:coverRef.current!.value,
                description:descriptionRef.current!.value,
                id:12
            }
            dispatch(addBook(book))
        }

    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="BooksName">
                Books name
                <input ref={nameRef} type='text' id="BooksName" />
            </label>
            <label htmlFor="year">
                Publishing year
                <input ref={yearRef} type='number' id="year" />
            </label>
            <label htmlFor="author">
                Author
                <input ref={authorRef } type='text' id="author" />
            </label>
            <label htmlFor="description">
                Description
                <input ref={descriptionRef} type="text" id="description" />
            </label>
            <label htmlFor="coverUrl">
                Covers URL
                <input ref={coverRef} type='text' id="coverUrl" />
            </label>
            <label htmlFor="genre">
                Genre
                <select ref={genreRef} id="genre">
                    <option value=''>Pick genre</option>
                    {genres.map((genre)=><option value={genre} key={genre}>{genre}</option>)}
                </select>
            </label>
            <label htmlFor="status">
                Status
                <select ref={statusRef} id="status">
                    <option value=''>Pick status</option>
                    {statuses.map((status)=><option value={status} key={status}>{status}</option>)}
                </select>
            </label>
            <button type="submit">Add book</button>
            <p>{errorMessage}</p>
        </form>
    )
}