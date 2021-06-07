import {useChat} from '../../context/ChatContext'

const ChatWindow = (props) => {
  const chat = useChat()
  const { messages } = chat
  return(
    <div id="chat-window">
      ChatWindow
      {messages.map(message => {
        return (
          <div>
            <p>{message.username} : {message.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ChatWindow