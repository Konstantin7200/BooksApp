import { useSelector } from 'react-redux'
import './App.css'
import { BookForm } from './Components/BookForm/BookForm'
import { BookLibrary } from './Components/BookLibrary/BookLibrary'
import type { RootState } from './state/store'
import { Statistics } from './Components/Statistics'

function App() {
  const editedBook=useSelector((state:RootState)=>state.books.bookEdited)
  return (
    <div className='App'>
      <BookForm/>
      <Statistics/>
      {editedBook!==null&&<BookForm book={editedBook}/>}
      <BookLibrary/>
    </div>
  )

}

export default App
