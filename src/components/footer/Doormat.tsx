import styles from './Doormat.module.css'
import Link from '../Link'

const Navigation = () => (
  <ul className={styles.Wrapper} role="navigation">
    <li className={styles.Item}>
      <Link href="/" title="Home">Home</Link>
    </li>
    <li className={styles.Item}>
      <Link href="/about" title="About">About</Link>
    </li>
    <li className={styles.Item}>
      <Link href="/menu" title="Menu">Menu</Link>
    </li>
    <li className={styles.Item}>
      <Link href="/reservations" title="Reservations">Reservations</Link>
    </li>
    <li className={styles.Item}>
      <Link href="/order" title="Order online">Order online</Link>
    </li>
  </ul>
)

export default Navigation