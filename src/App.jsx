import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import EditNotePage from './pages/EditNotePage'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/createNote' element={<CreateNotePage></CreateNotePage>}></Route>
        <Route path='/editNote/:id' element={<EditNotePage></EditNotePage>}></Route>
      </Routes>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='dark'
      />
    </div>
  )
}

export default App
