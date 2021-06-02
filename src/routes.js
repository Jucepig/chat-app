import { Switch, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Chat from './Components/Chat'


export default (
  <Switch>
    <Route exact path = '/' component={Home} />
    <Route path = '/login' component={Login} />
    <Route path = '/chat' component={Chat} />
  </Switch>
)