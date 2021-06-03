import Nav from '../Nav'
import homeRoutes from './homeRoutes'
import Profile from '../Profile'

const Home = (props) => {
  return (
    <div>
      <Nav />
      <Profile />
      <section>
        {homeRoutes}
      </section>
    </div>
  )
}

export default Home