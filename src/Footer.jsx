import styles from "./Footer.module.css"

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterContainer}>
      <a className={styles.FooterLogoContainer} href="/" title="Little Lemon">
        <img src="/Logo.svg" alt="logo"/>
      </a>
      <div className={styles.FooterContent}>
        <div>
          <h6>Doormat Navigation</h6>
          <ul>
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
          </ul>
        </div>
        <div>
          <h6>Contact</h6>
          <ul>
            <li>
              Address
            </li>
            <li>
              Email
            </li>
            <li>
              Phone
            </li>
          </ul>
        </div>
        <div>
          <h6>Social</h6>
          <ul>
            <li>
              Instagram
            </li>
            <li>
              Facebook
            </li>
            <li>
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer