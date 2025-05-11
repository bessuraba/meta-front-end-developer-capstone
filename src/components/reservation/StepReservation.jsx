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
import _ from 'lodash'

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
      <Button onClick={async () => {
        const { validateForm, setTouched } = formik

        await setTouched({ date: true, time: true, occasion: true, guests: true })

        const results = await validateForm(formik.values)

        if (!_.isEmpty(_.pick(results, ['date', 'time', 'occasion', 'guests']))) {
          return
        }

        onSubmit()
      }}>Reserve a table</Button>
      <Support />
    </Bottom>
  </>
)

export default StepReservation