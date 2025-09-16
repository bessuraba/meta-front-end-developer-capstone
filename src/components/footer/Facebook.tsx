import styles from "./Facebook.module.css"

const Facebook = () => (
  <a href="https://facebook.com/" className={styles.Wrapper} title="Facebook" target="_blank" rel="noopener noreferrer">
    <svg className={styles.Container} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.Path} d="M28 14.0846C28 6.30662 21.7313 0 14 0C6.26875 0 0 6.30662 0 14.0846C0 21.1143 5.11875 26.9411 11.8125 27.9987V18.1571H8.25688V14.0846H11.8125V10.9816C11.8125 7.45225 13.9031 5.50116 17.1006 5.50116C18.6325 5.50116 20.235 5.77656 20.235 5.77656V9.243H18.4688C16.7306 9.243 16.1869 10.3283 16.1869 11.4437V14.0846H20.0694L19.4494 18.1571H16.1875V28C22.8813 26.943 28 21.1162 28 14.0846Z" />
    </svg>
  </a>
)

export default Facebook