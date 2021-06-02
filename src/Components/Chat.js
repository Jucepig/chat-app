import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import io from 'socket.io-client'

const Chat = (props) => {
  const [socket, setSocket] = useState(null)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setSocket(io.connect('', {username: user.username}))
  }, [])
  return (
    <div>CHAT</div>
  )
}

export default Chat