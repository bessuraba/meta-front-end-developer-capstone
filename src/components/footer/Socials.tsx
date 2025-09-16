import styles from "./Socials.module.css"
import Instagram from "./Instagram"
import Facebook from "./Facebook"
import LinkedIn from "./LinkedIn"

const Socials = () => (
  <div className={styles.Wrapper}>
    <Instagram />
    <Facebook />
    <LinkedIn />
  </div>
)

export default Socials