import { useSelector } from 'react-redux'
import { BookForm } from './Components/BookForm/BookForm'
import { BookLibrary } from './Components/BookLibrary/BookLibrary'
import type { RootState } from './state/store'
import { Statistics } from './Components/Statistics/Statistics'
import { FavroritsList } from './Components/FavoritesList/FavoritesList'

function App() {
  const editedBook = useSelector((state: RootState) => state.books.bookEdited)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            📚 Book Library
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your book collection
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-1 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-blue-500">+</span> Add Book
              </h2>
              <div className="w-full">
                <BookForm />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <Statistics />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <FavroritsList />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-green-500">📖</span> Your Library
                </h2>
                <div className="text-sm text-gray-500">
                  All your books in one place
                </div>
              </div>
              <BookLibrary />
            </div>
          </div>
        </div>

        {editedBook !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  ✏️ Edit Book
                </h3>
                <span className="text-sm text-gray-500">
                  ID: {editedBook.id}
                </span>
              </div>
              <div className="w-full">
                <BookForm book={editedBook} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App