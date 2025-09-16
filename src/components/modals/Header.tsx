import React from 'react'
import styles from './Header.module.css'
import classNames from 'classnames'

interface HeaderProps {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps): React.JSX.Element => (
  <h3 className={classNames('text-sub-title', styles.Header)}>{children}</h3>
)

export default Header