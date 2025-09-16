import styles from './Contacts.module.css'
import classNames from 'classnames'

import React from 'react'
import { DataProps } from '@/types'

const Contacts = ({ data }: DataProps): React.JSX.Element => (
  <div className={styles.Wrapper}>
    <p className={classNames('text-card-title', styles.Name)}>{data.firstName || 'No first name'} {data.lastName || 'No last name'}</p>
    <p className={classNames('text-paragraph', styles.Info)}>{data.phone || 'No phone'} {data.email || 'No email'}</p>
    {data.sms && (<p className={classNames('text-paragraph', styles.Info)}>SMS Reminder</p>)}
  </div>
)

export default Contacts