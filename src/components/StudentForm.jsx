import { useState } from 'react'

const StudentForm = ({ onSubmit, student }) => {
  const [name, setName] = useState(student?.name || '')
  const [email, setEmail] = useState((typeof student.email !== 'undefined' && student.email) || '')
  const [priorXp, setPriorXp] = useState(student?.priorXp.join(' ') || '')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ name, email, priorXp })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        placeholder='name'
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <input
        type='text'
        value={email}
        placeholder='email'
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <input
        type='text'
        value={priorXp}
        placeholder='Prior Experience'
        onChange={e => {
          setPriorXp(e.target.value)
        }}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default StudentForm
