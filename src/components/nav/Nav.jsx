import styles from "./Nav.module.css"
import Logo from "./Logo"
import Navigation from "./Navigation"

const Nav = () => (
  <nav className={styles.Wrapper}>
    <div className={styles.Container}>
      <Logo />
      <Navigation />
    </div>
  </nav>
)

export default Nav