import React from 'react'
import styles from './Body.module.css'

interface BodyProps {
  children: React.ReactNode
}

const Body = ({ children }: BodyProps): React.JSX.Element => {
  return <div className={styles.Body}>{children}</div>
}

export default Body