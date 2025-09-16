import styles from './Right.module.css'
import classNames from 'classnames'

import React from 'react'
import { ContainerProps } from '@/types'

const Right = ({ children, className }: ContainerProps): React.JSX.Element => {
  return <div className={classNames(styles.Wrapper, className)}>{children}</div>
}

export default Right