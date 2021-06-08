import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCommunity } from '../../context/CommunityContext'

export default function() {
  const [loading, setLoading] = useState(true)
  const community = useCommunity()
  const {communityUsers, setCommunityUsers} = community
  useEffect(() => {
    axios
      .get('/api/users')
      .then(res => {
        setCommunityUsers(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(true)
      })
  })

  return loading ? (
    <div>
      Getting users...
    </div>
  ) : (
    <div id="community">
      {communityUsers.map((user, index) => {
        return (
          <div className="user" key={user.user_id}>
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