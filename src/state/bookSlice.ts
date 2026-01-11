import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book, Filter, Genre, SortSettings } from "../types";
import type { RootState } from "./store";

const initialState:booksInterface={
    books:[
        {id:0,name:"Chronics",author:"Some Dude",genre:'Fantasy',coverUrl:"data:image/webp;base64,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",publishingYear:1950,status:'Want to read'},
        {id:1,name:"Prequel",author:"Some Dude",genre:'History',coverUrl:"data:image/webp;base64,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",publishingYear:1950,status:'Want to read'},
        {id:2,name:"SuperBook",author:"Some Dude",genre:'Biography',coverUrl:"data:image/webp;base64,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",publishingYear:1949,status:'Want to read'},
        {id:3,name:"Sequel",author:"Dude",genre:'Sci-Fi',coverUrl:"data:image/webp;base64,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",publishingYear:1952,status:'Want to read'},
    ],
    lastID:0,
    bookEdited:null,
    filter:{status:null,genre:null,searchQueue:'',searchBy:'name'},
    sort:{sortBy:'name',sortOrder:'ascending'}
}
interface booksInterface{
    books:Book[],
    lastID:number,
    bookEdited:Book|null,
    filter:Filter,
    sort:SortSettings
}
export const bookSlice=createSlice({
    name:"books",
    initialState,
    reducers:{
        addBook:(state,action:PayloadAction<Book>)=>{
            state.lastID++;
            state.books.push({...action.payload,id:state.lastID})
        },
        deleteBook:(state,action:PayloadAction<Book>)=>{
            state.books=state.books.filter((book)=>book.id!=action.payload.id)
        },
        markAsRead:(state,action:PayloadAction<Book>)=>{
            state.books.forEach(element => {
                if(element.id==action.payload.id)
                {
                    element.status='Already read'
                }
            });
        },
        saveBook:(state,action:PayloadAction<Book>)=>{
            state.books=state.books.map(book =>book.id===action.payload.id?action.payload:book);
            state.bookEdited=null;
        },
        setBookToEdit:(state,action:PayloadAction<Book>)=>{
            state.bookEdited=action.payload
        },
        setFilter:(state,action:PayloadAction<Filter>)=>{
            state.filter=action.payload
        },
        setSort:(state,action:PayloadAction<SortSettings>)=>{
            state.sort=action.payload
        }
    }
})


const filtersSelector=(state:RootState)=>state.books.filter
export const booksSelector=(state:RootState)=>state.books.books
const sortSelector=(state:RootState)=>state.books.sort

export const filteredBooksSelector=createSelector(
    [filtersSelector,booksSelector,sortSelector],
    (filtersSelector,booksSelector,sortSelector):Book[]=>{
        const filteredBooks=booksSelector.filter((book)=>(book.genre===filtersSelector.genre||filtersSelector.genre===null)&&(book.status===filtersSelector.status||filtersSelector.status===null)&&(book[filtersSelector.searchBy].toLowerCase().includes(filtersSelector.searchQueue.toLowerCase())))
        if(sortSelector.sortBy=='name')
        {
            if(sortSelector.sortOrder=='ascending')
                return [...filteredBooks].sort((a,b)=>a.name.localeCompare(b.name))
            return [...filteredBooks].sort((a,b)=>b.name.localeCompare(a.name))
        }
        if(sortSelector.sortOrder=='ascending')
                return [...filteredBooks].sort((a,b)=>a.publishingYear-b.publishingYear)
        return [...filteredBooks].sort((a,b)=>b.publishingYear-a.publishingYear)
    }
)
export const favoriteGenreSelector=createSelector(
    [booksSelector],
    (booksSelector)=>{
        const result=new Map<Genre,number>();
        const genres:Genre[]=["Fantasy", "Sci-Fi", "Romance", "Mystery", "Thriller", "Horror", "Historical Fiction", "Biography", "Self-Help", "History"]
        for(let i=0;i<genres.length;i++)
            result.set(genres[i],0)
        booksSelector.forEach((book)=>result.set(book.genre,result.get(book.genre)!+1))
        let topGenre="None"
        let max=0
        for(const item of result)
        {
            if(item[1]>max)
            {
                topGenre=item[0]
                max=item[1]
            }
        }
        return [topGenre,max]
    }
)
export const favoriteAuthorSelector=createSelector(
    [booksSelector],
    (booksSelector)=>{
        const result=new Map<string,number>()
        booksSelector.forEach((book)=>{
            if(result.has(book.author))
                result.set(book.author,result.get(book.author)!+1)
            else
            {
                result.set(book.author,1)
            }
        })
        let topAuthor="None"
        let max=0
        for(const item of result)
        {
            if(item[1]>max)
            {
                topAuthor=item[0]
                max=item[1]
            }
        }
        return [topAuthor,max]
    }
)

export const statusStatisticsSelector=createSelector(
    [booksSelector],
    (booksSelector)=>{
        const result=[0,0,0]
        for(let i=0;i<booksSelector.length;i++)
        {
            switch(booksSelector[i].status){
                case 'Already read':{
                    result[0]++
                    break
                }
                case 'Reading':{
                    result[1]++
                    break
                }
                case 'Want to read':{
                    result[2]++
                    break
                }
            }
        }
        return {
            'Want to read':result[2],
            'Already read':result[0],
            'Reading':result[1]
        }
    }
)

export const {addBook,deleteBook,markAsRead,saveBook,setBookToEdit,setFilter,setSort}=bookSlice.actions
export const bookReducer=bookSlice.reducer