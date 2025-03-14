import styles from "./Nav.module.css"

const Nav = () => (
  <nav className={styles.Nav}>
    <div className={styles.NavContainer}>
      <a className={styles.NavLogoContainer} href="/" title="Little Lemon">
        <img src="/Logo.svg" alt="logo"/>
      </a>
      <ul className={styles.NavList} role="navigation">
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
    </div>
  </nav>
)

export default Nav