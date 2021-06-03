import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Profile = (props) => {
  const auth = useAuth()
  const history = useHistory()
  
  const handleLogoutClick = (cb) => {
    auth.handleLogout(cb)
  }

  return (
    <aside>
        <h2>HOME</h2>
        <img src={auth.user.profile_pic} alt={auth.user.username}/>
        <h4>Username: {auth.user.username}</h4>
        <button className="btn-secondary" onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
    </aside>
  )
}

export default Profile