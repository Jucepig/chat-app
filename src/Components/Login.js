import { useState, useContext } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const history = useHistory()

  const handleLoginClick = () => {
    auth.handleLogin(username, password)
  }

  const handleRegisterClick = () => {
    auth.handleRegister(username, password)
  }

  return (
    <div id="auth">
      <h1>ChatRooms</h1>
      <section id="auth-input-container">
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
        <button className="btn-primary" onClick={() => handleLoginClick(history.push('/'))}>Login</button>
        <button className="btn-primary" onClick={() => handleRegisterClick(history.push('/'))}>Register</button>
      </section>
    </div>
  )
}

export default Login