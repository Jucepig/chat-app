import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Profile = (props) => {
  const auth = useAuth()
  const history = useHistory()
  
  const handleLogoutClick = (cb) => {
    auth.handleLogout(cb)
  }

  return (
    <aside id="profile">
        <div>
          <img id="profile-pic" src={auth.user.profile_pic} alt={auth.user.username}/>
          <button className="btn-secondary" onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
        </div>
        <h4>Username: {auth.user.username}</h4>
    </aside>
  )
}

export default Profile