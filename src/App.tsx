import { useSelector } from 'react-redux'
import './App.css'
import { BookForm } from './Components/BookForm/BookForm'
import { BookLibrary } from './Components/BookLibrary/BookLibrary'
import type { RootState } from './state/store'

function App() {
  const editedBook=useSelector((state:RootState)=>state.books.bookEdited)
  return (
    <div className='App'>
      <BookForm/>
      {editedBook!==null&&<BookForm book={editedBook}/>}
      <BookLibrary/>
    </div>
  )

}

export default App
