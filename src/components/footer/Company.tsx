import styles from "./Company.module.css"
import classNames from "classnames"
import Link from "next/link"

const Company = () => (
  <div className={styles.Wrapper}>
    <Link className={styles.Logo} href="/" title="Little Lemon">
      <img className={styles.Image} src="/Logo.svg" alt="logo"/>
    </Link>
    <p className={classNames('text-highlight-text', styles.Address)}>789 Citrus Ave, Chicago, IL</p>
    <p className={classNames('text-highlight-text', styles.Email)}><span>Email: </span>contact@littlelemonchi.com</p>
    <p className={classNames('text-highlight-text', styles.Phone)}><span>Phone: </span>(312) 555-7890</p>
  </div>
)

export default Company