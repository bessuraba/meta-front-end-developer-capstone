import styles from "./Title.module.css"
import classNames from "classnames"

const Title = ({ children }) => (
  <h1 className={classNames('text-display-title', styles.Title)}>{children}</h1>
)

export default Title