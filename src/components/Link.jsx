import styles from './Link.module.css'
import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'

const Link = ({ children, className, ...props}) => (
  <RouterLink className={classNames(styles.Link, className, 'text-lead-text')} {...props}>{children}</RouterLink>
)

export default Link