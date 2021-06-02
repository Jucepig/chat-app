import { useState, useContext, createContext } from 'react'
import axios from 'axios'

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [ user, setUser ] = useState(null)

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

  const handleLogout = () => {
    axios
      .get('/auth/logout')
      .then( _ => {
        setUser(null)
      })
      .catch(err => console.log(err))
  }

  return {
    user,
    setUser,
    handleLogin,
    handleRegister,
    handleLogout
  }
}