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
import styles from './StepReservation.module.css'

const StepReservation = ({ onSubmit, formik }) => (
  <>
    <Top>
      <Left className={styles.Left}>
        <Field component={InputDate} name="date" />
      </Left>
      <div>
        <Field component={InputTime} name="time" />
      </div>
    </Top>
    <Top>
      <div>
        <Field component={InputOccasion} name="occasion" />
      </div>
      <div>
        <Field component={InputGuests} name="guests" />
      </div>
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