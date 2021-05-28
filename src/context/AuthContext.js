import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
  const [ user, setUser ] = useState('')
  const history = useHistory()

  const handleLogin = (username, password) => {
    axios
      .post('/auth/login', {username, password})
      .then(res => {
        console.log(res.data)
        setUser(res.data)
        history.push('/dashboard')
      })
      .catch(err => console.log(err))
  }

  const handleRegister = (username, password) => {
    axios
      .post('/auth/register', {username, password})
      .then(res => {
        console.log(res.data)
        setUser(res.data)
        history.push('/dashboard')
      })
      .catch(err => console.log(err))
  }

  const handleLogout = () => {
    axios
      .get('/auth/logout')
      .then( _ => {
        setUser('')
        history.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <AuthContext.Provider value={{
      user,
      setUser, 
      handleLogin,
      handleRegister,
      handleLogout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}