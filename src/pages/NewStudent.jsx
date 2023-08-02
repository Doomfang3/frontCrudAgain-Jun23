import { useNavigate } from 'react-router-dom'
import StudentForm from '../components/StudentForm'
import { sendStudent } from '../utils/studentsAPICalls'

function NewStudent() {
  const navigate = useNavigate()

  const handleNewStudent = async payload => {
    const priorXpArray = payload.priorXp.split(' ')
    const newStudent = {
      name: payload.name,
      email: payload.email,
      priorXp: priorXpArray,
    }

    const response = await sendStudent(newStudent)
    const parsed = await response.json()
    navigate(`/students/${parsed._id}`)
  }

  return (
    <div>
      <StudentForm onSubmit={handleNewStudent} />
    </div>
  )
}

export default NewStudent
