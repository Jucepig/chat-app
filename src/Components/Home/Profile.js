import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Profile = (props) => {
  const auth = useAuth()
  const history = useHistory()
  const {handleEditUsername, user} = auth
  const [edit, setEdit] = useState(false)
  const [input, setInput] = useState('')

  
  const handleLogoutClick = (cb) => {
    auth.handleLogout(cb)
  }

  const handleSave = () => {
    handleEditUsername(user.user_id, input)
    setInput('')
    handleToggleEdit()
  }

  const handleToggleEdit = () => {
    setEdit(!edit)
  }

  return (
       <aside id="profile">
      <div id="user-logout">
        <img id="profile-pic" src={user.profile_pic} alt={user.username}/>
        <button className="btn-secondary" onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
      </div>
      <div id="username">
        <p>{user.username}</p>
      </div>
    </aside>
  )
  // return edit ? (
  //   <aside id="profile">
  //       <div id="user-logout">
  //         <img id="profile-pic" src={user.profile_pic} alt={user.username}/>
  //         <button className="btn-primary" onClick={() => handleSave()}>Save</button>
  //         <button className="btn-secondary" onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
  //       </div>
  //       <div id="username">
  //         <input placeholder={user.username} value={input ? input : user.username} onChange={e => setInput(e.target.value )} />
  //       </div>
  //   </aside>
  // ) : (
  //   <aside id="profile">
  //     <div id="user-logout">
  //       <img id="profile-pic" src={user.profile_pic} alt={user.username}/>
  //       <button className="btn-primary" onClick={() => handleToggleEdit()}>Edit</button>
  //       <button className="btn-secondary" onClick={() => handleLogoutClick(() => history.push('/'))}>Logout</button>
  //     </div>
  //     <div id="username">
  //       <p>{user.username}</p>
  //     </div>
  //   </aside>
  // )
}

export default Profile