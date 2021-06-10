import { Link } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

 const Nav = (props) => {
  const auth = useAuth()

  return (
    <nav id='nav'>
      <div id="links">
        <Link to="/home">
          Home
        </Link>
        <Link to={`/home/about_me/${auth.user.user_id}`}>
          About Me
        </Link>
        <Link to="/home/chat">
          Chat
        </Link>
      </div>
    </nav>
  )
}

export default Nav