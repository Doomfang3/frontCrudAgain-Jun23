import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const StudentDetailsPage = () => {
  const { studentId } = useParams()
  const navigate = useNavigate()

  const [student, setStudent] = useState()

  const fetchStudent = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/students/${studentId}`)
      if (response.status === 200) {
        const parsedStudent = await response.json()
        setStudent(parsedStudent)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchStudent()
  }, [])

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/students/${studentId}`, {
        method: 'DELETE',
      })
      if (response.status === 202) {
        navigate('/students')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return student ? (
    <>
      <h1>Student Details</h1>
      <h2>{student.name}</h2>
      <h3>{student.email}</h3>
      <ul>
        {student.priorXp.map(currentXp => (
          <li>{currentXp}</li>
        ))}
      </ul>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </>
  ) : (
    <h1>Loading...</h1>
  )
}

export default StudentDetailsPage
