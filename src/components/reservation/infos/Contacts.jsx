import styles from './Contacts.module.css'
import classNames from 'classnames'

const Contacts = ({ data }) => (
  <div className={styles.Wrapper}>
    <p className={classNames('text-card-title', styles.Name)}>{data.firstName} {data.lastName}</p>
    <p className={classNames('text-paragraph', styles.Info)}>{data.phone} {data.email}</p>
    {data.sms && (<p className={classNames('text-paragraph', styles.Info)}>SMS Reminder</p>)}
  </div>
)

export default Contacts