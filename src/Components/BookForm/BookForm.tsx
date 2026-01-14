import { useRef, useState, type FC, type FormEvent } from "react";
import type { Book, Genre, Status } from "../../types";
import { useDispatch } from "react-redux";
import { addBook, saveBook } from "../../state/bookSlice";

interface BookFormProps{
    book?:Book
}

export const BookForm:FC<BookFormProps>=({book})=>{
    const genres:Genre[]=["Fantasy", "Sci-Fi", "Romance", "Mystery", "Thriller", "Horror", "Historical Fiction", "Biography", "Self-Help", "History"]
    const statuses:Status[]=['Reading',"Want to read","Already read"]
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
            errorMessage+="publishing year,"
        if(!authorRef.current?.value)
            errorMessage+="author,"
        if(!coverRef.current?.value)
            errorMessage+="covers URL,"
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
                genre:genreRef.current!.value as Genre,
                status:statusRef.current!.value as Status,
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
        <form onSubmit={handleSubmit} className="flex flex-col w-100 gap-1 p-2 border-blue-400 items-center border-1 rounded-lg">
            <label className="w-full flex justify-between font-semibold" htmlFor="BooksName">
                Books name
                <input className="border-blue-400 border rounded-lg overflow-scroll font-medium" defaultValue={book?.name} ref={nameRef} type='text' id="BooksName" />
            </label>
            <label className="w-full flex justify-between font-semibold" htmlFor="year">
                Publishing year
                <input className="border-blue-400 border rounded-lg overflow-scroll font-medium" defaultValue={book?.publishingYear} ref={yearRef} type='number' id="year" />
            </label>
            <label className="w-full flex justify-between font-semibold" htmlFor="author">
                Author
                <input className="border-blue-400 border rounded-lg overflow-scroll font-medium" defaultValue={book?.author} ref={authorRef } type='text' id="author" />
            </label>
            <label className="w-full flex justify-between font-semibold" htmlFor="coverUrl">
                Covers URL
                <input className="border-blue-400 border rounded-lg overflow-scroll font-medium" defaultValue={book?.coverUrl} ref={coverRef} type='text' id="coverUrl" />
            </label>
            <label className="w-full flex justify-between font-semibold" htmlFor="genre">
                Genre
                <select className="border-blue-400 border rounded-md pr-2 pl-2 font-medium" defaultValue={book?.genre} ref={genreRef} id="genre">
                    <option value=''>Pick genre</option>
                    {genres.map((genre)=><option value={genre} key={genre}>{genre}</option>)}
                </select>
            </label>
            <label className="w-full flex justify-between font-semibold" htmlFor="status">
                Status
                <select className="border-blue-400 border rounded-md pr-2 pl-2 font-medium" defaultValue={book?.status} ref={statusRef} id="status">
                    <option value=''>Pick status</option>
                    {statuses.map((status)=><option  value={status} key={status}>{status}</option>)}
                </select>
            </label>
            <label className="w-full flex justify-between font-semibold" htmlFor="description">
                Description(optional)
                <input className="border-blue-400 border rounded-lg overflow-scroll font-medium" defaultValue={book?.description} ref={descriptionRef} type="text" id="description" />
            </label>
            {errorMessage&&<p className="bg-red-200 text-black p-2 rounded-md">{errorMessage}</p>}
            <button className="rounded-md bg-blue-400 p-2 pr-8 pl-8 transition duration-400 hover:bg-blue-300" type="submit">{book?"Save book":"Add book"}</button>
        </form>
    )
}