import { useNavigate, useParams } from 'react-router-dom'
import StudentForm from '../components/StudentForm'
import { useEffect, useState } from 'react'
import { fetchStudent, sendStudent } from '../utils/studentsAPICalls'

const UpdateStudentPage = () => {
  const navigate = useNavigate()
  const { studentId } = useParams()
  const [student, setStudent] = useState()

  useEffect(() => {
    fetchStudent(studentId, setStudent)
  }, [])

  const handleUpdateStudent = async payload => {
    const priorXpArray = payload.priorXp.split(' ')
    const updatedStudent = {
      name: payload.name,
      email: payload.email,
      priorXp: priorXpArray,
    }
    const response = await sendStudent(updatedStudent, studentId, 'PUT')

    const parsed = await response.json()
    navigate(`/students/${parsed._id}`)
  }

  return (
    <>
      <h1>Update student</h1>
      {student && <StudentForm onSubmit={handleUpdateStudent} student={student} />}
    </>
  )
}

export default UpdateStudentPage
