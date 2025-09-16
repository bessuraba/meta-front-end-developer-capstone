import React from 'react'
import styles from './Label.module.css'
import classNames from 'classnames'

interface LabelProps {
  children: React.ReactNode
  className?: string
  error?: boolean
  [key: string]: any
}

const Label = ({ children, className, error, ...props }: LabelProps): React.JSX.Element => (
  <label className={classNames(styles.Label, {
    [styles.Error]: error
  }, className, 'text-card-title')} {...props}>{children}</label>
)

export default Label