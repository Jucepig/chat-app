import { useAuth } from '../../context/AuthContext'
import { useHistory, Link, Route, Switch } from 'react-router-dom'
import Nav from '../Nav'
// import subroutes from './subroutes'
import Chat from '../Chat'
import ChatRooms from '../ChatRooms'

const Home = (props) => {
  const auth = useAuth()
  const history = useHistory()

  const handleLogoutClick = (cb) => {
    auth.handleLogout(cb)
  }

  return (
    <div>
      <Nav />
      <aside>
        <h2>HOME</h2>
        <img src={auth.user.profile_pic} alt={auth.user.username}/>
        <h4>Username: {auth.user.username}</h4>
        <button className="btn-secondary" onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
        <Link to="/home/chatrooms">
        <p>ChatRooms</p>
        </Link>
      </aside>
      <div>
        <p>showcase</p>
        <Switch>
          <Route path='/home/chatrooms' component={ChatRooms}/>
          <Route exact path='/home/chat' component={Chat}/>
        </Switch>
      </div>
    </div>
  )
}

export default Home