import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Dashboard = (props) => {
  const { user, handleLogout } = useContext(AuthContext)

  const handleLogoutClick = () => {
    handleLogout()
  }

  return (
    <div>
      <h2>DASHBOARD</h2>
      <img src={user.profile_pic} alt={user.username}/>
      <h4>Username: {user.username}</h4>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}

export default Dashboard