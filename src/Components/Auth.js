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
    <div>
      <h2>AUTH: SITE TITLE</h2>
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
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  )
}

export default Auth