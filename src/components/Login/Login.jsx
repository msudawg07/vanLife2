import { useState } from 'react'
import {useLocation} from 'react-router-dom'

export default function Login() {

  const [formData, setFormData] = useState({email:'', password:''})

  const messFromAuth = useLocation()
  const authMessage = messFromAuth.state?.mess ?
  <h2>{messFromAuth.state.mess}</h2> : null

  function handleSubmit(e) {
    e.preventDefault()
    //console.log(formData)

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })

  }

  function handleChange(e) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
    {authMessage}
     <h1>Sign in to your account</h1>
     <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='email'
          placeholder="email"
          name='email'
          value={formData.email}
        >
        </input><br></br>
        <input
          onChange={handleChange}
          type='password'
          placeholder="password"
          name='password'
          value={formData.password}
        >
        </input><br></br>

        <button>Sign In</button>
     </form>

     <div>Don't have an account? <span>Create one now</span></div>
    </>
  )
}