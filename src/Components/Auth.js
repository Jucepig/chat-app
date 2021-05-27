import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Auth = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { handleLogin, handleRegister } = useContext(AuthContext)

  return (
    <div>
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
      <button onClick={() => handleLogin(username, password)}>Login</button>
      <button onClick={() => handleRegister(username,password)}>Register</button>
    </div>
  )
}