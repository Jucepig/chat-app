import {useState, useEffect} from 'react'
import axios from 'axios'
import {useAuth} from '../../context/AuthContext'


export default () => {
  const auth = useAuth()
  const [profiledUser, setProfiledUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`/api/user/${auth.user.user_id}`)
      .then(result => {
        setProfiledUser(result.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(true)
      })
  })

  return loading ? (
    <div>Getting interests...</div>
  ) : (
    <div>{profiledUser.interests}</div>
  )
}