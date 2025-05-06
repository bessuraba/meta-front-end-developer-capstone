import Header from './header/Header'
import Main from '../Main'
import Title from './header/Title'
import { useNavigation, useOutletContext } from 'react-router-dom'

const ReservationComplete = (props) => {
  const { reservation } = useOutletContext()
  console.log(reservation)
  return (
    <>
      <Header>
        <Title>Confirmation</Title>
      </Header>
      <Main>
      </Main>
    </>
  )
}

export default ReservationComplete
