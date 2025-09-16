import styles from "./Header.module.css"

import React from 'react'
import { ChildrenProps } from '@/types'

const Header = ({ children }: ChildrenProps): React.JSX.Element => (
  <header className={styles.Wrapper}>
    <div className={styles.Container}>
      {children}
    </div>
  </header>
)

export default Header