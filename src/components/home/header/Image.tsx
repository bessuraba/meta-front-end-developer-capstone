import styles from "./Image.module.css"

const Image = () => (
  <div className={styles.Wrapper}>
    <img className={styles.Image} src="/restaurant-food.jpg" alt="hero"/>
  </div>
)

export default Image