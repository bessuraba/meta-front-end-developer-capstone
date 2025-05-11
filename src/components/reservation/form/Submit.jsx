import styles from './Submit.module.css'
import classNames from 'classnames'

const Submit = ({ children }) => {
  return (
    <button className={classNames('btn-primary', styles.Button)} type="submit">
      {children}
    </button>
  )
}

export default Submit