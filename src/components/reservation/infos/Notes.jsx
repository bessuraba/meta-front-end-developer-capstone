import styles from './Contacts.module.css'
import classNames from 'classnames'

const Notes = ({ data }) => (
  <p className={classNames('text-paragraph', styles.Wrapper)}>{data.note}</p>
)

export default Notes