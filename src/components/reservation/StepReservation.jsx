import Button from './form/Button'
import Bottom from './containers/Bottom'
import Support from './links/Support'
import Top from './containers/Top'

const StepReservation = ({ onSubmit, formik }) => (
  <>
    <Top>
      <div>Left</div>
      <div>Right</div>
    </Top>
    <Bottom>
      <Button onClick={onSubmit}>Reserve a table</Button>
      <Support />
    </Bottom>
  </>
)

export default StepReservation