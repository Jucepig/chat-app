import {useChat} from '../../context/ChatContext'

const PrivateChatWindow = (props) => {
  const chat = useChat()
  const { privateMessages } = chat
  return(
    <div id="chat-window">
      PrivateChatWindow
      {privateMessages.map(message => {
        return (
          <div>
            <p>{message.username} : {message.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default PrivateChatWindow