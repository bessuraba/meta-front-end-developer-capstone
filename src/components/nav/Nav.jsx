import styles from "./Nav.module.css"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Drawer from "./Drawer"

const Nav = () => (
  <nav className={styles.Wrapper}>
    <div className={styles.Container}>
      <Drawer />
      <Logo />
      <Navigation />
    </div>
  </nav>
)

export default Nav