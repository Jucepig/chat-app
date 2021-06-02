import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
  const auth = useAuth()
  const history = useHistory() 

  const handleLogoutClick = (cb) => {
    auth.handleLogout(cb)
  }



  return auth.user ? (
    <div>
      <h2>HOME</h2>
      <img src={auth.user.profile_pic} alt={auth.user.username}/>
      <h4>Username: {auth.user.username}</h4>
      <button onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
    </div>
  ) : (
    <div>You must be logged in.</div>
  )
}

export default Home