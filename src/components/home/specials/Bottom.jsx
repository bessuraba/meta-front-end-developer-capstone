import styles from "./Bottom.module.css"
import classNames from "classnames"

const Bottom = () => (
  <div className={styles.Wrapper}>
    <p className={classNames('text-highlight-text', styles.Description)}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
    <a className={classNames('btn-primary', styles.Link)} href="/order" title="Order online">Order online</a>
  </div>
)

export default Bottom