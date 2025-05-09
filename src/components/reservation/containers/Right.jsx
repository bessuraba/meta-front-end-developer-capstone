import styles from './Right.module.css'
import classNames from 'classnames'

const Right = ({ children, className }) => {
  return <div className={classNames(styles.Wrapper, className)}>{children}</div>
}

export default Right