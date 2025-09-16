import styles from './Confirmation.module.css'

import React from 'react'
import { ChildrenProps } from '@/types'

const Confirmation = ({ children }: ChildrenProps): React.JSX.Element => (
  <section className={styles.Wrapper}>
    {children}
  </section>
)

export default Confirmation