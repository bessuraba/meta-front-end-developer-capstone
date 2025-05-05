import Header from './header/Header'
import Main from '../Main'
import Title from './header/Title'
import Button from './form/Button'

const StepReservation = ({ onSubmit }) => (
  <>
    step reservation
    <Button onClick={onSubmit}>Reserve a table</Button>
  </>
)

export default StepReservation