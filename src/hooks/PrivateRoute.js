import { useAuth } from '../context/AuthContext'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {
  let auth = useAuth()

  return (
    <Route 
      {...rest}
      render={props => 
        auth.user ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{
              pathname: "/",
            }}          
          />
        )
      }
    />
  )
}

export default PrivateRoute