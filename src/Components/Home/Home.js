import Nav from './Nav'
import homeRoutes from './homeRoutes'
import Profile from './Profile'
import Community from './Community'
import { useLocation } from 'react-router-dom'

const Home = (props) => {
  const location = useLocation()
  return location.pathname === '/home'? (    
    <div id="home-container">
      <Nav />
      <main id="hero">
        <Profile />
        <section id="showcase">
          <Community/>
        </section>
      </main>
    </div>
  ) : (
      <div id="home-container">
        <Nav />
        <main id="hero">
          <Profile />
          <section id="showcase">
            {homeRoutes}
          </section>
        </main>
      </div>
  )
}

export default Home