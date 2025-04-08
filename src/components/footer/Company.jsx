import styles from "./Company.module.css"

const Company = () => (
  <div className={styles.Wrapper}>
    <a className={styles.Logo} href="/" title="Little Lemon">
      <img className={styles.Image} src="/Logo.svg" alt="logo"/>
    </a>
    <p className={styles.Address}>789 Citrus Ave, Chicago, IL</p>
    <p className={styles.Email}>Email: contact@littlelemonchi.com</p>
    <p className={styles.Phone}>Phone: (312) 555-7890</p>
  </div>
)

export default Company