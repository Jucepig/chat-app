import { useContext } from 'react'
import { useAuth } from '../context/AuthContextHook'
import { useHistory } from 'react-router-dom'

const Home = (props) => {
  const auth = useAuth()
  const history = useHistory()


  const handleLogoutClick = () => {
    auth.handleLogout()
  }



  return auth.user ? (
    <div>
      <h2>HOME</h2>
      <img src={auth.user.profile_pic} alt={auth.user.username}/>
      <h4>Username: {auth.user.username}</h4>
      <button onClick={() => handleLogoutClick(history.push('/login'))}>Logout</button>
    </div>
  ) : (
    <div>You must be logged in.</div>
  )
}

export default Home