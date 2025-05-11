import styles from './Background.module.css'

const Background = ({ onClick }) => {
  return <div onClick={onClick} className={styles.Background} />
}

export default Background