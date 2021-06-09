import { useState, useContext, createContext, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import io from 'socket.io-client'

const chatContext = createContext()

// Wrapper
export const ProvideChat = ({ children }) => {
  const chat = useProvideChat()
  return <chatContext.Provider value={chat}>{children}</chatContext.Provider>
}

// Hook
export const useChat = () => {
  return useContext(chatContext)
}

function useProvideChat () {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const { user } = useAuth();

  useEffect(() => {
    if(!user) {
      if(socket) {
        socket.disconnect()
        setSocket(null)
      }
    } else {
      if(!socket) {
        setSocket(io.connect())
      }
    }
    return () => {
      if(socket) {
        socket.disconnect()
      }
    }
  }, [user])

  useEffect(() => {
    if(socket){
      //client-side endpoints
      socket.on('relay-message', (body) => {
        const {message, username} = body
        setMessages(messages => [...messages, {message, username}])
      })
    }
  }, [socket])

  const sendMessage = (message) => {
    socket.emit('send-message', {message, username: user.username})
  }

  return {
    sendMessage,
    messages
  }
}