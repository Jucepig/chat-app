import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './hooks/PrivateRoute'
import Login from './Components/Login'
import Home from './Components/Home'
import Chat from './Components/Chat'


export default (
  <Switch>
    <Route exact path = '/' component={Login} />
    <PrivateRoute path = '/chat' component={Chat} />
    <PrivateRoute path = '/home' component={Home} />
  </Switch>
)