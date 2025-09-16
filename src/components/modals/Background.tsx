import React from 'react'
import styles from './Background.module.css'

interface BackgroundProps {
  onClick: () => void
}

const Background = ({ onClick }: BackgroundProps): React.JSX.Element => {
  return <div onClick={onClick} className={styles.Background} />
}

export default Background