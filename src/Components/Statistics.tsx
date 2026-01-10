import type { FC } from "react"
import { useSelector } from "react-redux"
import { favoriteAuthorSelector, favoriteGenreSelector, statusStatisticsSelector } from "../state/bookSlice"

export const Statistics:FC=()=>{
    const statusStats=useSelector(statusStatisticsSelector)
    const [favoriteGenre,booksByGenreAmount]=useSelector(favoriteGenreSelector)
    const [favoriteAuthor,booksByAuthorAmount]=useSelector(favoriteAuthorSelector)
    return(
        <div>
            <div>
                <p>Already read : {statusStats["Already read"]}</p>
                <p>Reading : {statusStats["Reading"]}</p>
                <p>Want to read : {statusStats["Want to read"]}</p>
            </div>
            <p>Favorite genre is {favoriteGenre} with {booksByGenreAmount} {booksByGenreAmount==1?'book':'books'} in the library</p>
            <p>Favorite author is {favoriteAuthor} with {booksByAuthorAmount} {booksByAuthorAmount==1?'book':'books'} in the library</p>
        </div>
    )
}
