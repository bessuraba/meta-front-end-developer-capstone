import styles from "./Main.module.css"
import classNames from "classnames"

const Main = () => (
  <main className={styles.Main}>
    <div className={classNames(styles.MainContainer, 'text-display-title')}>
      Main
    </div>
  </main>
)

export default Main