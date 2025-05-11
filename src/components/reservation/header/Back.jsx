import styles from './Back.module.css'

const Back = ({ onClick }) => (
  <button type="button" className={styles.Button} onClick={onClick}>
    <img src="/icon-chevron-left.svg" alt="back"/>
  </button>
)

export default Back