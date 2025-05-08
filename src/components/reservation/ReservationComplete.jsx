import Header from './header/Header'
import Main from '../Main'
import Title from './header/Title'
import { useOutletContext } from 'react-router-dom'
import Bottom from './containers/Bottom'
import Reservations from './links/Reservations'
import Section from './containers/Confirmation'
import Top from './containers/Top'

const ReservationComplete = (props) => {
  const { reservation } = useOutletContext()
  console.log(reservation)
  return (
    <>
      <Header>
        <Title>Confirmation</Title>
      </Header>
      <Main>
        <Section>
          <Top>
            <div>Left</div>
            <div>Right</div>
          </Top>
          <Bottom>
            <Reservations />
          </Bottom>
        </Section>
      </Main>
    </>
  )
}

export default ReservationComplete
