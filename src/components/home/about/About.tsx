import styles from "./About.module.css"
import Content from "./Content"
import { Chefs, Restaurant } from "./Images"

const About = () => (
  <section className={styles.Wrapper}>
    <div className={styles.Container}>
      <Restaurant />
      <Content />
      <Chefs />
    </div>
  </section>
)

export default About