import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllStudentsPage from './pages/AllStudentsPage'
import StudentDetailsPage from './pages/StudentDetailsPage'
import NewStudent from './pages/NewStudent'
import UpdateStudentPage from './pages/UpdateStudentPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/students' element={<AllStudentsPage />} />
        <Route path='/students/:studentId' element={<StudentDetailsPage />} />
        <Route path='/students/new' element={<NewStudent />} />
        <Route path='/students/:studentId/update' element={<UpdateStudentPage />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
