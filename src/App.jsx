import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Reservation from './components/reservation/Reservation'
import About from './components/about/About'
import Menu from './components/menu/Menu'
import Order from './components/order/Order'
import Login from './components/login/Login'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
