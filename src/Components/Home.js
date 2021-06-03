import { useAuth } from '../context/AuthContext'
import { useHistory, useRouteMatch, Route } from 'react-router-dom'
import Chat from './Chat'

const Home = (props) => {
  const auth = useAuth()
  const history = useHistory() 
  const match = useRouteMatch()

  const handleLogoutClick = (cb) => {
    auth.handleLogout(cb)
  }

  return (
    <div>
      <Route exact path={`${match.url}`}>
        <h2>HOME</h2>
        <img src={auth.user.profile_pic} alt={auth.user.username}/>
        <h4>Username: {auth.user.username}</h4>
        <button className="btn-secondary" onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
      </Route>
      <Route path={`${match.url}/chat`}>
        <Chat/>
      </Route>
    </div>
  )
}

export default Home