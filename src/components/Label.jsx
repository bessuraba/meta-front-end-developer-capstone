import styles from './Label.module.css'
import classNames from 'classnames'

const Label = ({ children, className, error, ...props }) => (
  <label className={classNames(styles.Label, {
    [styles.Error]: error
  }, className, 'text-card-title')} {...props}>{children}</label>
)

export default Label