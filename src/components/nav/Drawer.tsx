'use client'

import styles from './Drawer.module.css'
import { useCallback, useEffect, useState, HTMLAttributes } from 'react'
import dynamic from 'next/dynamic'

const DrawerMenu = dynamic(
  () => import('./DrawerMenu'),
  { ssr: false }
);

type Props = HTMLAttributes<HTMLButtonElement> & {
  isDrawerOpen: boolean
}

const ButtonToggle: React.FC<Props> = ({
  isDrawerOpen,
  onClick,
  ...props
}: Props): React.JSX.Element => (
  <button
    {...props}
    type="button"
    aria-controls="drawer-menu"
    aria-expanded={isDrawerOpen}
    className={styles.Button}
    onClick={onClick}>
    <img className={styles.IconDrawer} src="/icon-drawer.svg" alt="menu"/>
  </button>
)

const ButtonClose: React.FC<Props> = ({
  isDrawerOpen,
  onClick,
  ...props
}: Props): React.JSX.Element => (
  <button
    {...props}
    type="button"
    aria-controls="drawer-menu"
    aria-expanded={isDrawerOpen}
    className={styles.Button}
    onClick={onClick}>
    <img className={styles.IconCross} src="/icon-cross.svg" alt="close"/>
  </button>
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
      <DrawerMenu onClick={handleToggle} isDrawerOpen={isDrawerOpen}>
        <ButtonClose aria-label='Close Drawer' onClick={handleToggle} isDrawerOpen={isDrawerOpen}/>
      </DrawerMenu>
    </>
  )
}

export default Drawer