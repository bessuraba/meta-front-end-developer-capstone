import styles from "./ContentHome.module.css"
import classNames from "classnames"

const Content = () => (
  <div className={styles.Wrapper}>
    <h1 className={classNames('text-display-title', styles.Title)}>Little Lemon</h1>
    <h3 className={classNames('text-sub-title', styles.Subtitle)}>Chicago</h3>
    <p className={classNames('text-paragraph', styles.Description)}>Lorem ipsum odor amet, consectetuer adipiscing elit. Euismod laoreet nostra fusce ex in nullam adipiscing arcu nunc. Tempor faucibus felis vulputate turpis magnis porttitor.</p>
    <a className={classNames('btn-secondary', styles.Link)} href="/reservation" title="Reserve a table">Reserve a table</a>
  </div>
)

export default Content