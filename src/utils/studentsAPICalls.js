export const fetchStudent = async (studentId, setter) => {
  try {
    const response = await fetch(`http://localhost:5005/api/students/${studentId}`)
    if (response.status === 200) {
      const parsedStudent = await response.json()
      setter(parsedStudent)
    }
  } catch (error) {
    console.error(error)
  }
}

export const sendStudent = async (student, studentId = '', method = 'POST') => {
  return fetch(`http://localhost:5005/api/students/${studentId}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  })
}
