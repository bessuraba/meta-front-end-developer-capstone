import './App.css'
import Nav from './components/nav/Nav'
import HeaderHome from './components/header/HeaderHome'
import Main from './components/Main'
import Footer from './components/footer/Footer'
import About from './components/home/about/About'
import Specials from './components/home/specials/Specials'
import Testimonials from './components/home/testimonials/Testimonials'

function App() {
  return (
    <>
      <Nav />
      <HeaderHome />
      <Main>
        <Specials />
        <Testimonials />
        <About />
      </Main>
      <Footer />
    </>
  )
}

export default App;
