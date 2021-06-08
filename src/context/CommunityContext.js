import { useState, useContext, createContext } from 'react'

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



  return {
    communityUsers,
    setCommunityUsers
  }
}