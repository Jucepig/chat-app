import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Auth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin, handleRegister } = useContext(AuthContext)

  const handleLoginClick = () => {
    handleLogin(username, password)
  }

  const handleRegisterClick = () => {
    handleRegister(username, password)
  }

  return (
    <div id="auth">
      <h2>SITE TITLE</h2>
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
        <button className="btn-primary" onClick={handleLoginClick}>Login</button>
        <button className="btn-primary" onClick={handleRegisterClick}>Register</button>
      </section>
    </div>
  )
}

export default Auth