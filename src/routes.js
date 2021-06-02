import { Switch, Route } from 'react-router-dom'
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Chat from './Components/Chat'


export default (
  <Switch>
    <Route exact path = '/' component={Auth} />
    <Route path = '/dashboard' component={Dashboard} />
    <Route path = '/chat' component={Chat} />
  </Switch>
)