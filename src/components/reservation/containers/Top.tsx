import styles from './Top.module.css'

import React from 'react'
import { ChildrenProps } from '@/types'

const Top = ({ children }: ChildrenProps): React.JSX.Element => (
  <div className={styles.Wrapper}>
    {children}
  </div>
)

export default Top