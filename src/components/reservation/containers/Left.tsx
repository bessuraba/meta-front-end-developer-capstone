import styles from './Left.module.css'
import classNames from 'classnames'

import React from 'react'
import { ContainerProps } from '@/types'

const Left = ({ children, className }: ContainerProps): React.JSX.Element => {
  return <div className={classNames(styles.Wrapper, className)}>{children}</div>
}

export default Left