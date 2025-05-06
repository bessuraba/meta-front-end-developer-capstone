import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Reservation from './components/reservation/Reservation'
import ReservationForm from './components/reservation/ReservationForm'
import ReservationComplete from './components/reservation/ReservationComplete'
import About from './components/about/About'
import Menu from './components/menu/Menu'
import Order from './components/order/Order'
import Login from './components/login/Login'
import Reservations from './components/reservations/Reservations'
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
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservation" element={<Reservation />}>
          <Route index element={<ReservationForm />} />
          <Route path="complete" element={<ReservationComplete />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
