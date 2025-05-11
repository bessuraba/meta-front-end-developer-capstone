import Submit from './form/Submit'
import Bottom from './containers/Bottom'
import Support from './links/Support'
import Top from './containers/Top'
import Left from './containers/Left'
import Right from './containers/Right'
import styles from './StepReviewInfo.module.css'
import Table from './infos/Table'
import { Field } from 'formik'
import InputFirstName from './form/InputFirstName'
import InputLastName from './form/InputLastName'
import InputEmail from './form/InputEmail'
import InputPhone from './form/InputPhone'
import InputSMS from './form/InputSMS'
import InputNote from './form/InputNote'

const StepReviewInfo = ({ formik }) => (
  <>
    <Top>
      <Left>
        <Table data={formik.values} />
      </Left>
      <Right>
        <div className={styles.Required}>
          <Field component={InputFirstName} name="firstName" />
          <Field component={InputLastName} name="lastName" />
          <Field component={InputEmail} name="email" />
          <Field component={InputPhone} name="phone" />
          <Field component={InputSMS} name="sms" />
        </div>
        <Field component={InputNote} name="note" />
      </Right>
    </Top>
    <Bottom>
      <Submit>Complete Reservation</Submit>
      <Support />
    </Bottom>
  </>
)

export default StepReviewInfo