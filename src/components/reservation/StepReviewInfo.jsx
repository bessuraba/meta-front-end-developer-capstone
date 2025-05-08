import Submit from './form/Submit'
import Bottom from './containers/Bottom'
import Support from './links/Support'
import Top from './containers/Top'

const StepReviewInfo = () => (
  <>
    <Top>
      <div>Left</div>
      <div>Right</div>
    </Top>
    <Bottom>
      <Submit />
      <Support />
    </Bottom>
  </>
)

export default StepReviewInfo