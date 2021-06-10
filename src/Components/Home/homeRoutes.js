import { Switch, Route } from 'react-router-dom'
import Chat from '../Chat/Chat'
import ChatRooms from '../ChatRooms'
import Private from '../Private/Private'
import AboutMe from '../Home/AboutMe'

export default (
  <Switch>
    <Route exact path='/home/chat' component={Chat}/>
    <Route path='/home/chatrooms' component={ChatRooms}/>
    <Route path='/home/private' component={Private} />
    <Route path='/home/about_me/:user_id' component={AboutMe} />
  </Switch>
)