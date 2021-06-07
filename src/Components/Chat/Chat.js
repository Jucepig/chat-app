import ChatWindow from './ChatWindow'
import { useChat } from '../../context/ChatContext'
import { useState } from 'react'

const Chat = (props) => {
  const chat = useChat()
  const [ message, setMessage ] = useState()

  const sendMessage = () => {
    chat.sendMessage(message)
    setMessage('')
  }
  
  return (
    <div id="chat">
      <ChatWindow />
      <div id="input">
        <input value={message} onChange={e => setMessage(e.target.value )} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Chat