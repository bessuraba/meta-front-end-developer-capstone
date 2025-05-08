import styles from './Left.module.css'
import classNames from 'classnames'

const Left = ({ children, className }) => {
  return <div className={classNames(styles.Wrapper, className)}>{children}</div>
}

export default Left