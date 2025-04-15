import Header from './header/Header'
import Main from '../Main'
import About from './about/About'
import Specials from './specials/Specials'
import Testimonials from './testimonials/Testimonials'

const Home = () => (
  <>
    <Header />
    <Main>
      <Specials />
      <Testimonials />
      <About />
    </Main>
  </>
)

export default Home