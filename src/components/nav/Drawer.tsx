'use client'

import styles from './Drawer.module.css'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import Link from '../Link'

const ButtonToggle = (props: any): React.JSX.Element => (
  <button
    {...props}
    type="button"
    aria-controls="drawer-menu"
    aria-expanded={props.isDrawerOpen}
    className={styles.Button}
    onClick={props.onClick}>
    <img className={styles.IconDrawer} src="/icon-drawer.svg" alt="menu"/>
  </button>
)

const ButtonClose = (props: any): React.JSX.Element => (
  <button
    {...props}
    type="button"
    aria-controls="drawer-menu"
    aria-expanded={props.isDrawerOpen}
    className={styles.Button}
    onClick={props.onClick}>
    <img className={styles.IconCross} src="/icon-cross.svg" alt="close"/>
  </button>
)

const Wrapper = (props: any): React.JSX.Element => (
  <div className={classNames(styles.Wrapper, props.className)}>
    <div className={styles.TopBar}>{props.children}</div>
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
  </div>
)

const Drawer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setDrawerOpen(!isDrawerOpen)
  }, [isDrawerOpen])

  useEffect(() => {
    const handleResize = () => {
      setDrawerOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <ButtonToggle aria-label='Open Drawer' onClick={handleToggle} isDrawerOpen={isDrawerOpen}/>
      {typeof window !== 'undefined' && createPortal(
        (<Wrapper onClick={handleToggle} className={{
          [styles.WrapperOpened]: isDrawerOpen
        }}>
          <ButtonClose aria-label='Close Drawer' onClick={handleToggle} isDrawerOpen={isDrawerOpen}/>
        </Wrapper>),
        document.body
      )}
    </>
  )
}

export default Drawer