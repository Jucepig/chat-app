import { useEffect } from 'react'
import { useCommunity } from '../../context/CommunityContext'

export default function() {
  
  const community = useCommunity()
  const { communityUsers, loading, getAllUsers } = community
  
  useEffect(() => {
    getAllUsers()
  })

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
              <p>{user.online ? 'online' : 'offline'}</p>
             </div>
          </div>
        )
      })}
    </div>
  )
}