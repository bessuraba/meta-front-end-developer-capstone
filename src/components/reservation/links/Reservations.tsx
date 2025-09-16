import styles from './Reservations.module.css'
import Link from '../../Link'

const Reservations = () => (
  <Link className={styles.Link} href="/reservations" title="Reservations">See All Reservations</Link>
)

export default Reservations