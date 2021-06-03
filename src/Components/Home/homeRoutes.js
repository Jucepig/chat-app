import { Switch, Route } from 'react-router-dom'
import Chat from '../Chat'
import ChatRooms from '../ChatRooms'

export default (
  <Switch>
    <Route exact path='/home/chat' component={Chat}/>
    <Route path='/home/chatrooms' component={ChatRooms}/>
  </Switch>
)