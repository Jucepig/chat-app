import { useEffect } from 'react'
import { useCommunity } from '../../context/CommunityContext'
import { useChat } from '../../context/ChatContext'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

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
    console.log(user)
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
             <p>
                <Link to={`/home/about_me/${user.user_id}`}>
                  {user.username}
                </Link>
              </p>
              <div>{user.online ?'online' : 'offline'}</div>
              {/* <div>{user.online ? <button onClick={() => handleJoinRoom (user.username)}>Join Chat</button> : 'offline'}</div> */}
             </div>
          </div>
        )
      })}
    </div>
  )
}