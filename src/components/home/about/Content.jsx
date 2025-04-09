import styles from "./Content.module.css"
import classNames from "classnames"

const Content = () => (
  <div className={styles.Wrapper}>
    <h2 className={classNames('text-display-title', styles.Title)}>Little Lemon</h2>
    <h3 className={classNames('text-sub-title', styles.Subtitle)}>Chicago</h3>
    <p className={classNames('text-paragraph', styles.Description)}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Vitae pellentesque sem placerat in id cursus mi. Tempus leo eu aenean sed diam urna tempor. Nec metus bibendum egestas iaculis massa nisl malesuada. Ut hendrerit semper vel class aptent taciti sociosqu. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Montes nascetur ridiculus mus donec rhoncus eros lobortis. Maximus eget fermentum odio phasellus non purus est. Vestibulum fusce dictum risus blandit quis suspendisse aliquet. Ante condimentum neque at luctus nibh finibus facilisis. Ligula congue sollicitudin erat viverra ac tincidunt nam. Euismod quam justo lectus commodo augue arcu dignissim.</p>
  </div>
)

export default Content