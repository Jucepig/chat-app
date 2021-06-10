import PrivateChatWindow from './PrivateChatWindow'
import { useChat } from '../../context/ChatContext'
import {useAuth} from '../../context/AuthContext'
import { useState } from 'react'


const Private = (props) => {
  const auth = useAuth()
  const {user} = auth
  const chat = useChat()
  const [ message, setMessage ] = useState()

  const sendMessage = () => {
    // console.log(message, user)
    chat.sendPrivateMessage({message, username:user.username, room: user.username  })
    setMessage('')
  }
  
  return (
    <div id="chat">
      <PrivateChatWindow />
      <div id="input-footer">
        <input id="input" value={message} onChange={e => setMessage(e.target.value )} />
        <button className="btn-primary" id="submit-message" onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Private