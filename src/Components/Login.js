import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const history = useHistory()
  const {error, setError } = auth

  const handleLoginClick = (cb) => {
    auth.handleLogin(username, password, cb)
  }

  const handleRegisterClick = (cb) => {
    auth.handleRegister(username, password, cb)
  }

  const closeErrorMessage = () => {
    setUsername('')
    setPassword('')
    setError('')
  }

  return (
    <div id="auth">
      <h1>ChatRooms</h1>
      <section id="auth-input-container">
        {error ? <span>{error}  <button className="btn-primary" onClick={closeErrorMessage}>X</button></span> : null}
        <input 
          value={username}
          type='text' 
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input
          value={password}
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>
      <section id="auth-btn-container">
        <button className="btn-primary" onClick={() => handleLoginClick(() => history.push('/home'))}>Login</button>
        <button className="btn-primary" onClick={() => handleRegisterClick(() => history.push('/home'))}>Register</button>
      </section>
    </div>
  )
}

export default Login