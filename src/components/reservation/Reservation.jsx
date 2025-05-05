import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Reservation = () => {
  const [data, setData] = useState({})
  return (
    <Outlet context={[data, setData]}/>
  )
}

export default Reservation