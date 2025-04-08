import styles from "./Footer.module.css"
import Company from "./Company"
import Doormat from "./Doormat"
import Socials from "./Socials"
import Copy from "./Copy"

const Footer = () => (
  <footer className={styles.Wrapper}>
    <div className={styles.Container}>
      <div className={styles.Top}>
        <Company />
        <Doormat />
      </div>
      <div className={styles.Bottom}>
        <Socials />
        <Copy />
      </div>
    </div>
  </footer>
)

export default Footer