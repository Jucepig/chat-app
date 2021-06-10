import { useCommunity } from '../context/CommunityContext'

const ChatRooms = () => {
  const community = useCommunity()
  const {chatRooms} = community
  
  return(
    <div>
      ChatRooms
      {chatRooms.map((room, index) => {
        return (
          <div key={index}>{room}</div>
        )
      })}
    </div>
  )
}

export default ChatRooms