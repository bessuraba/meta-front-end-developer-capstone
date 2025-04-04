import styles from "./Navigation.module.css"

const Navigation = () => (
  <ul className={styles.Wrapper} role="navigation">
    <li>
      <a href="/" title="Home">Home</a>
    </li>
    <li>
      <a href="/about" title="About">About</a>
    </li>
    <li>
      <a href="/menu" title="Menu">Menu</a>
    </li>
    <li>
      <a href="/reservation" title="Reservation">Reservation</a>
    </li>
    <li>
      <a href="/order" title="Order online">Order online</a>
    </li>
    <li>
      <a href="/login" title="Login">Login</a>
    </li>
  </ul>
)

export default Navigation