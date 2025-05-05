import styles from './Back.module.css'

const Back = ({ onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>back</button>
)

export default Back