import {useState, useEffect} from 'react'
import axios from 'axios'
import {useAuth} from '../../context/AuthContext'
import {useParams} from 'react-router-dom'


export default () => {
  const auth = useAuth()
  const slug = useParams()
  const [profiledUser, setProfiledUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [input, setInput] = useState('')
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/user/${slug.user_id}`)
      .then(result => {
        setProfiledUser(result.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(true)
      })
      return () => {
        if(profiledUser) {
          setProfiledUser(null)
          setLoading(true)
        }
      }
  } , [slug])

  const handleSaveInterests = () => {
    const interests = input
    axios
      .put(`/api/user/${slug.user_id}`, {interests})
      .then(result => {
        console.log(result.data)
        setProfiledUser(result.data)
        handleToggleEdit()
      })
      .catch(err => {
        console.log(err)
      })
  }

  
  const handleToggleEdit = () => {
    setEditing(!editing)
    setInput(profiledUser.interests)
  }


  if(loading) {
    return (
      <div>Getting interests...</div>
    )
  } else if(auth.user.user_id === profiledUser.user_id) {
    return editing ? (
      <div>
        <img src={profiledUser.profile_pic} alt={profiledUser.username}/> 
        <p>{profiledUser.username}</p>
        <p>{profiledUser.interests}</p>
        <input placeholder={profiledUser.interests} value={input} onChange={e => setInput(e.target.value )} />
        <button className="btn-secondary" onClick={() => handleSaveInterests()}>Save</button>
      </div>
    ) : (
      <div>
        <img src={profiledUser.profile_pic} alt={profiledUser.username}/> 
        <p>{profiledUser.username}</p>
        <p>{profiledUser.interests}</p>
        <button className="btn-secondary" onClick={() => handleToggleEdit()}>Edit</button>
      </div>
    )
  } else {
    return (
      <div>
        <img src={profiledUser.profile_pic} alt={profiledUser.username}/> 
        <p>{profiledUser.username}</p>
        <p>{profiledUser.interests}</p>
      </div>
    )
  }
}