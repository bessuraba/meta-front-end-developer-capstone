import styles from "./Company.module.css"
import classNames from "classnames"

const Company = () => (
  <div className={styles.Wrapper}>
    <a className={styles.Logo} href="/" title="Little Lemon">
      <img className={styles.Image} src="/Logo.svg" alt="logo"/>
    </a>
    <p className={classNames('text-highlight-text', styles.Address)}>789 Citrus Ave, Chicago, IL</p>
    <p className={classNames('text-highlight-text', styles.Email)}>Email: contact@littlelemonchi.com</p>
    <p className={classNames('text-highlight-text', styles.Phone)}>Phone: (312) 555-7890</p>
  </div>
)

export default Company