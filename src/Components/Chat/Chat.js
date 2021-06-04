// import { useState, useEffect, useContext } from 'react'
// import { useAuth } from '../context/AuthContext'
// import io from 'socket.io-client'
import ChatWindow from './ChatWindow'

const Chat = (props) => {
  // const [socket, setSocket] = useState(null)
  // const { user } = useAuth();

  // useEffect(() => {
  //   setSocket(io.connect('', {username: user.username}))
  // }, [])
  
  return (
    <div>
      <ChatWindow />
      <div>
        <input></input>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Chat