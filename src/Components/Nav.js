import { Link } from 'react-router-dom'

export default Nav = (props) => {
  return (
    <div id='nav'>
      <Link to="/home">
        <p>Home</p>
      </Link>
      <Link>
        <p>Profile</p>
      </Link>
      <Link>
        <p>ChatRooms</p>
      </Link>
      <Link to="/chat">
        <p>Chat</p>
      </Link>
    </div>
  )
}