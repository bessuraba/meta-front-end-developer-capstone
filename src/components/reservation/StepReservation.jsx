import Button from './form/Button'
import Bottom from './containers/Bottom'
import Support from './links/Support'
import Top from './containers/Top'
import InputDate from './form/InputDate'
import InputTime from './form/InputTime'
import InputOccasion from './form/InputOccasion'
import InputGuests from './form/InputGuests'
import { Field } from 'formik'
import Left from './containers/Left'
import Right from './containers/Right'
import styles from './StepReservation.module.css'

const StepReservation = ({ onSubmit, formik }) => (
  <>
    <Top>
      <Left className={styles.Left}>
        <Field component={InputDate} name="date" />
      </Left>
      <Right className={styles.Right}>
        <Field component={InputTime} name="time" />
      </Right>
    </Top>
    <Top>
      <Left className={styles.Left}>
        <Field component={InputOccasion} name="occasion" />
      </Left>
      <Right className={styles.Right}>
        <Field component={InputGuests} name="guests" />
      </Right>
    </Top>
    <Bottom>
      <Button onClick={() => {
        const { validateField, setTouched, errors } = formik
        validateField('date', 'time', 'occasion', 'guests')
        setTouched({ date: true, time: true, occasion: true, guests: true })
        onSubmit()
      }}>Reserve a table</Button>
      <Support />
    </Bottom>
  </>
)

export default StepReservation