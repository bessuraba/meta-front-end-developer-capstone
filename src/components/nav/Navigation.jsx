import styles from './Navigation.module.css'
import Link from '../Link'

const Navigation = () => (
  <ul className={styles.Wrapper} role="navigation">
    <li className={styles.Item}>
      <Link to="/" title="Home">Home</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/about" title="About">About</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/menu" title="Menu">Menu</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/reservation" title="Reservation">Reservation</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/order" title="Order online">Order online</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/login" title="Login">Login</Link>
    </li>
  </ul>
)

export default Navigation