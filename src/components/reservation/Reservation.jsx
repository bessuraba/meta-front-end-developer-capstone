import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Reservation = () => {
  const [reservation, setReservation] = useState({})
  return (
    <Outlet context={{ reservation, setReservation }}/>
  )
}

export default Reservation