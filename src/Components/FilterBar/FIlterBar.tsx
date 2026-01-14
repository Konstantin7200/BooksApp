import { useEffect, useState, type FC } from "react";
import type { Filter, Genre, SearchByOptions, Status } from "../../types";
import { useDispatch } from "react-redux";
import { setFilter } from "../../state/bookSlice";

export const FilterBar:FC=()=>{
    const genres:Genre[]=["Fantasy", "Sci-Fi", "Romance", "Mystery", "Thriller", "Horror", "Historical Fiction", "Biography", "Self-Help", "History"]
    const statuses:Status[]=['Reading',"Want to read","Already read"]
    const dispatch=useDispatch();
    const [genre,setGenre]=useState('')
    const [status,setStatus]=useState('')
    const [searchValue,setSearchValue]=useState('')
    const [searchBy,setSearchBy]=useState('name')
    useEffect(()=>{
        const filter:Filter={
            status:status==''?null:status as Status,
            genre:genre==''?null:genre as Genre,
            searchQueue:searchValue,
            searchBy:searchBy as SearchByOptions
        }
        dispatch(setFilter(filter))
    },[status,genre,searchValue])
    return(
        <div className="flex flex-col p-2">
            <h1 className="font-bold text-2xl">Filter settings</h1>
            <div className="flex flex-row justify-between">
                <label className="font-semibold">
                    Status 
                    <select className="border-blue-400 border rounded-md pr-2 pl-2 font-medium" value={status} onChange={(e)=>setStatus(e.target.value)}>
                        <option key=' ' value=''>All</option>
                        {statuses.map((status)=><option value={status} key={status}>{status}</option>)}
                    </select>
                </label>
                <label className="font-semibold">
                    Genre
                    <select className="border-blue-400 border rounded-md pr-2 pl-2 font-medium" value={genre} onChange={(e)=>setGenre(e.target.value)}>
                        <option key=' ' value=''>All</option>
                        {genres.map((genre)=><option value={genre} key={genre}>{genre}</option>)}
                    </select>
                </label>
            </div>
            <label className="flex justify-between flex-row" htmlFor="nameSearch">
                Search by
                <select className="border-blue-400 border rounded-md pr-2 pl-2 font-medium"  value={searchBy} onChange={(e)=>setSearchBy(e.target.value)}>
                    <option value={'name'}>Books name</option>
                    <option value={'author'}>Authors name</option>
                </select>
                <input className="border-blue-400 border rounded-lg overflow-scroll font-medium" id="nameSearch" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}></input>
            </label>
            
        </div>
    )
}