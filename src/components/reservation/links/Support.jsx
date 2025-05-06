import styles from './Support.module.css'
import Link from '../../Link'

const Support = () => (
  <Link className={styles.Link} onClick={() => alert('Call Booking Support')}>Call Booking Support</Link>
)

export default Support