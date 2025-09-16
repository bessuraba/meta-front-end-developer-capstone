import styles from './Back.module.css'

import React from 'react'
import { OnClickProps } from '@/types'

const Back = ({ onClick }: OnClickProps): React.JSX.Element => (
  <button type="button" className={styles.Button} onClick={onClick}>
    <img src="/icon-chevron-left.svg" alt="back"/>
  </button>
)

export default Back