import { Link } from 'react-router-dom'

 const Nav = (props) => {
  return (
    <nav id='nav'>
      <div id="links">
        <Link to="/home">
          Home
        </Link>
        <Link to="/home/private">
          Private
        </Link>
        <Link to="/home/chat">
          Chat
        </Link>
      </div>
    </nav>
  )
}

export default Nav