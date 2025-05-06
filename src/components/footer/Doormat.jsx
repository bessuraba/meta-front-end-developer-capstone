import styles from './Doormat.module.css'
import Link from '../Link'

const Navigation = () => (
  <ul className={styles.Wrapper} role="navigation">
    <li className={styles.Item}>
      <Link to="/" title="Home" onClick={() => window.scrollTo(0, 0)}>Home</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/about" title="About" onClick={() => window.scrollTo(0, 0)}>About</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/menu" title="Menu" onClick={() => window.scrollTo(0, 0)}>Menu</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/reservation" title="Reservation" onClick={() => window.scrollTo(0, 0)}>Reservation</Link>
    </li>
    <li className={styles.Item}>
      <Link to="/order" title="Order online" onClick={() => window.scrollTo(0, 0)}>Order online</Link>
    </li>
  </ul>
)

export default Navigation