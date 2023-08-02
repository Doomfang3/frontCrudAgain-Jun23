import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllStudentsPage from './pages/AllStudentsPage'
import StudentDetailsPage from './pages/StudentDetailsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/students' element={<AllStudentsPage />} />
        <Route path='/students/:studentId' element={<StudentDetailsPage />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
