import styles from "./Logo.module.css"
import Link from "next/link"

const Logo = () => (
  <Link className={styles.Wrapper} href="/" title="Little Lemon">
    <img className={styles.Image} src="/Logo.svg" alt="logo"/>
  </Link>
)

export default Logo