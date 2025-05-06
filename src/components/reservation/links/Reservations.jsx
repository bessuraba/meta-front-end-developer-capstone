import styles from './Reservations.module.css'
import Link from '../../Link'

const Reservations = () => (
  <Link className={styles.Link} to="/reservations" title="Reservations" onClick={() => window.scrollTo(0, 0)}>See All Reservations</Link>
)

export default Reservations