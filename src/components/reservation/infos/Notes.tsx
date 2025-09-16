import styles from './Contacts.module.css'
import classNames from 'classnames'

import React from 'react'
import { DataProps } from '@/types'

const Notes = ({ data }: DataProps): React.JSX.Element => (
  <p className={classNames('text-paragraph', styles.Wrapper)}>{data.note || 'No notes'}</p>
)

export default Notes