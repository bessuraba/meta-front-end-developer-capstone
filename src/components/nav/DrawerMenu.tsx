'use client'

import styles from './DrawerMenu.module.css'
import { HTMLAttributes } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import Link from '../Link'

type Props = HTMLAttributes<HTMLDivElement> & {
  isDrawerOpen: boolean
}

const Wrapper: React.FC<Props> = ({
  className,
  children,
  isDrawerOpen,
  onClick
}: Props): React.JSX.Element => {
  return createPortal(
    (<div onClick={onClick} className={classNames(styles.Wrapper, {
      [styles.WrapperOpened]: isDrawerOpen
    }, className)}>
      <div className={styles.TopBar}>{children}</div>
      <ul className={styles.Menu} role="navigation">
        <li className={styles.Item}>
          <Link href="/" title="Home">Home</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/about" title="About">About</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/menu" title="Menu">Menu</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/reservations" title="Reservations">Reservations</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/order" title="Order online">Order online</Link>
        </li>
        <li className={styles.Item}>
          <Link href="/login" title="Login">Login</Link>
        </li>
      </ul>
    </div>),
    document.body
  )
}

export default Wrapper