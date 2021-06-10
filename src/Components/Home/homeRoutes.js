import { Switch, Route } from 'react-router-dom'
import Chat from '../Chat/Chat'
import ChatRooms from '../ChatRooms'
import Private from '../Private/Private'

export default (
  <Switch>
    <Route exact path='/home/chat' component={Chat}/>
    <Route path='/home/chatrooms' component={ChatRooms}/>
    <Route path='/home/private' component={Private} />
  </Switch>
)