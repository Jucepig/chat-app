import { useState, useContext, createContext } from 'react'
import axios from 'axios'

const communityContext = createContext()

// Wrapper
export const ProvideCommunity = ({ children }) => {
  const community = useProvideCommunity()
  return <communityContext.Provider value = {community}> {children}</communityContext.Provider>
}

// Hook
export const useCommunity = () => {
  return useContext(communityContext)
}

function useProvideCommunity () {
  const [communityUsers, setCommunityUsers] = useState([])
  const [chatRooms, setChatRooms] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllUsers = () => {
    axios
    .get('/api/users')
    .then(res => {
      setCommunityUsers(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(true)
    })
  }

  return {
    communityUsers,
    setCommunityUsers,
    loading, 
    setLoading,
    getAllUsers
  }
}