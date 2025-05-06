import styles from './Top.module.css'

const Top = ({ children }) => (
  <div className={styles.Wrapper}>
    {children}
  </div>
)

export default Top