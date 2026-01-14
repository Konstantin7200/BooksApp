import type { FC } from "react"
import { useSelector } from "react-redux"
import { favoriteAuthorSelector, favoriteGenreSelector, statusStatisticsSelector } from "../../state/bookSlice"

export const Statistics:FC=()=>{
    const statusStats=useSelector(statusStatisticsSelector)
    const [favoriteGenre,booksByGenreAmount]=useSelector(favoriteGenreSelector)
    const [favoriteAuthor,booksByAuthorAmount]=useSelector(favoriteAuthorSelector)
    return(
        <div className="flex flex-col border-red-300 border p-4 rounded-md gap-2">
            <h1 className="font-bold text-3xl">Statistics</h1>
            <p><span className="font-semibold">Already read</span> : {statusStats["Already read"]}</p>
            <p><span className="font-semibold">Reading</span> : {statusStats["Reading"]}</p>
            <p><span className="font-semibold">Want to read</span> : {statusStats["Want to read"]}</p>
            <p><span className="font-semibold">Favorite genre</span> is {favoriteGenre} with {booksByGenreAmount} {booksByGenreAmount==1?'book':'books'} in the library</p>
            <p><span className="font-semibold">Favorite author</span> is {favoriteAuthor} with {booksByAuthorAmount} {booksByAuthorAmount==1?'book':'books'} in the library</p>
        </div>
    )
}
