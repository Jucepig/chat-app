import { useState, useContext, createContext, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useCommunity } from '../context/CommunityContext'
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
  const [privateMessages, setPrivateMessages] = useState([])
  const { user } = useAuth();
  const { setChatRooms, chatRooms } = useCommunity();

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
      const username = user.username
      socket.emit('create-private-room', {username})

      socket.on('relay-message', (body) => {
        const {message, username} = body
        setMessages(messages => [...messages, {message, username}])
      })

      socket.on('private-message', (body) => {
        console.log(body)
        const {message, username} = body
        setPrivateMessages(privateMessages => [...privateMessages, {message, username}])
      })
    }
  }, [socket])

  const sendMessage = (message) => {
    socket.emit('send-message', {message, username: user.username})
  }

  const sendPrivateMessage = (body) => {
    // console.log(body)
    socket.emit('private-message', body)
  }

  const joinRoom = ({room, username}) =>{
    socket.emit('join-room', {room, username})
  }

  return {
    sendMessage,
    messages,
    privateMessages,
    sendPrivateMessage,
    socket,
    joinRoom
  }
}