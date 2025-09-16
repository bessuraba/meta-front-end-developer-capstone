import styles from './Button.module.css'
import classNames from 'classnames'

import React from 'react'
import { ButtonProps } from '@/types'

const Button = ({ children, onClick, ...props }: ButtonProps): React.JSX.Element => (
  <button {...props} type="button" onClick={onClick} className={classNames('btn-primary', styles.Button)}>
    {children}
  </button>
)

export default Button