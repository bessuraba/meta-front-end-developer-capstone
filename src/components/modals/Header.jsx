import styles from './Header.module.css'
import classNames from 'classnames'

const Header = ({ children }) => (
  <h3 className={classNames('text-sub-title', styles.Header)}>{children}</h3>
)

export default Header