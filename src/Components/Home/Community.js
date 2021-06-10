import { useEffect } from 'react'
import { useCommunity } from '../../context/CommunityContext'
import { useChat } from '../../context/ChatContext'
import { useAuth } from '../../context/AuthContext'

export default function() {
  const chat = useChat()
  const { joinRoom } = chat
  const community = useCommunity()
  const { communityUsers, loading, getAllUsers } = community
  const auth = useAuth()
  
  useEffect(() => {
    getAllUsers()
  })

  const handleJoinRoom = (user) => {
    joinRoom({room: user, username: auth.user.username})
  }

  return loading ? (
    <div id="community">
      Getting users...
    </div>
  ) : (
    <div id="community">
      {communityUsers.map((user, index) => {
        return (
          <div className={index % 2 === 0 ? 'user' : 'other-user'} key={user.user_id}>
             <img className="user-pic" src={user.profile_pic} alt={user.username}/>
             <div className="user-info">
              <p>{user.username}</p>
              <div>{user.online ? <button onClick={() => handleJoinRoom (user.username)}>Join Chat</button> : 'offline'}</div>
             </div>
          </div>
        )
      })}
    </div>
  )
}