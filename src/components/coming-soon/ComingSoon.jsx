import styles from './ComingSoon.module.css'
import classNames from 'classnames'

const ComingSoon = ({ children }) => (
  <section className={styles.Wrapper}>
    <div className={styles.Container}>
      <h2 className={classNames('text-sub-title', styles.Title)}>{children}</h2>
      <p className={classNames('text-paragraph', styles.Description)}>This page is under construction</p>
    </div>
  </section>
)

export default ComingSoon