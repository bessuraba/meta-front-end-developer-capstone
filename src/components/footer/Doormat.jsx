import styles from "./Doormat.module.css"
import classNames from "classnames"

const Navigation = () => (
  <ul className={styles.Wrapper} role="navigation">
    <li className={styles.Item}>
      <a className={classNames(styles.Link, 'text-lead-text')} href="/" title="Home">Home</a>
    </li>
    <li className={styles.Item}>
      <a className={classNames(styles.Link, 'text-lead-text')} href="/about" title="About">About</a>
    </li>
    <li className={styles.Item}>
      <a className={classNames(styles.Link, 'text-lead-text')} href="/menu" title="Menu">Menu</a>
    </li>
    <li className={styles.Item}>
      <a className={classNames(styles.Link, 'text-lead-text')} href="/reservation" title="Reservation">Reservation</a>
    </li>
    <li className={styles.Item}>
      <a className={classNames(styles.Link, 'text-lead-text')} href="/order" title="Order online">Order online</a>
    </li>
    <li className={styles.Item}>
      <a className={classNames(styles.Link, 'text-lead-text')} href="/login" title="Login">Login</a>
    </li>
  </ul>
)

export default Navigation