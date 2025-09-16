import styles from './Submit.module.css'
import classNames from 'classnames'

import React from 'react'
import { ChildrenProps } from '@/types'

const Submit = ({ children }: ChildrenProps): React.JSX.Element => {
  return (
    <button className={classNames('btn-primary', styles.Button)} type="submit">
      {children}
    </button>
  )
}

export default Submit