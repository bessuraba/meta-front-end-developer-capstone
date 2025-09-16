import styles from './Bottom.module.css'

import React from 'react'
import { ChildrenProps } from '@/types'

const Bottom = ({ children }: ChildrenProps): React.JSX.Element => (
  <div className={styles.Bottom}>{children}</div>
)

export default Bottom