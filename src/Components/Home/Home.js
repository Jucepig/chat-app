import Nav from '../Nav'
import homeRoutes from './homeRoutes'
import Profile from '../Profile'

const Home = (props) => {
  return (
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