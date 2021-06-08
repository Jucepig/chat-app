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
    <div>
      {communityUsers.map(user => {
        return (
          <div key={user.user_id}>
             <img src={user.profile_pic} alt={user.username}/>
             <p>{user.username}</p>
             <p>{user.online ? 'online' : 'offline'}</p>
          </div>
        )
      })}
    </div>
  )
}