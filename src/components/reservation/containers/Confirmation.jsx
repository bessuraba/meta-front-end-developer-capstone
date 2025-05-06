import styles from './Confirmation.module.css'

const Confirmation = ({ children }) => (
  <section className={styles.Wrapper}>
    {children}
  </section>
)

export default Confirmation