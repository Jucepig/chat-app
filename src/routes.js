import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Auth from './Components/Auth'

export default (
  <Switch>
    <Route exact path = '/' component={Dashboard} />
    <Route path = '/auth' component={Auth} />
  </Switch>
)