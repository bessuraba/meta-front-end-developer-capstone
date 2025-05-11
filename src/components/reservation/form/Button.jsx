import styles from './Button.module.css'
import classNames from 'classnames'

const Button = ({ children, onClick, ...props }) => (
  <button {...props} type="button" onClick={onClick} className={classNames('btn-primary', styles.Button)}>
    {children}
  </button>
)

export default Button