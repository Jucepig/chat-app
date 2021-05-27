import { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
  const [ user, setUser ] = useState('')

  const handleLogin = (username, password) => {
    axios
      .post('/auth/login', {username, password})
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err))
  }

  const handleRegister = (username, password) => {
    axios
      .post('/auth/register', {username, password})
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err))
  }

  const handleLogout = (userId) => {
    axios
      .get(`/api/logout/${userId}`)
      .then( _ => {
        setUser('')
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