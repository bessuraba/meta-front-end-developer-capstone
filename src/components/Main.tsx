import React from 'react'
import styles from "./Main.module.css"
import { MainProps } from '../types'

const Main = ({ children }: MainProps): React.JSX.Element => (
  <main className={styles.Wrapper}>
    {children}
  </main>
)

export default Main