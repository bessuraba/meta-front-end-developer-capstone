import styles from "./Header.module.css"

const Header = ({ children }) => (
  <header className={styles.Wrapper}>
    <div className={styles.Container}>
      {children}
    </div>
  </header>
)

export default Header