import styles from "./Logo.module.css"

const Logo = () => (
  <a className={styles.Wrapper} href="/" title="Little Lemon">
    <img className={styles.Image} src="/Logo.svg" alt="logo"/>
  </a>
)

export default Logo