import { Link } from 'react-router-dom'

 const Nav = (props) => {
  return (
    <nav id='nav'>
      <Link to="/home">
        <p>Home</p>
      </Link>
      <Link to="/home/chatrooms">
        <p>ChatRooms</p>
      </Link>
      <Link to="/home/chat">
        <p>Chat</p>
      </Link>
    </nav>
  )
}

export default Nav