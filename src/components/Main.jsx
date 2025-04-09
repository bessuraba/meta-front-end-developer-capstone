import styles from "./Main.module.css"

const Main = ({ children }) => (
  <main className={styles.Wrapper}>
    {children}
  </main>
)

export default Main