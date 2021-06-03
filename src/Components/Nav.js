import { Link } from 'react-router-dom'

 const Nav = (props) => {
  return (
    <div id='nav'>
      <Link to="/home">
        <p>Home</p>
      </Link>
      <Link to="/home/chatrooms">
        <p>ChatRooms</p>
      </Link>
      <Link to="/home/chat">
        <p>Chat</p>
      </Link>
    </div>
  )
}

export default Nav