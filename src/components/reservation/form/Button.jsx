import styles from './Button.module.css'

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick} className={styles.Button}>{children}</button>
)

export default Button