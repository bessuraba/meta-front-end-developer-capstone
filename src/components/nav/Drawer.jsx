import styles from "./Drawer.module.css"
import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import classNames from "classnames"

const ButtonToggle = (props) => (
  <button
    type="button"
    aria-controls="drawer-menu"
    aria-expanded={props.isDrawerOpen}
    className={styles.Button}
    onClick={props.onClick}>
    <img className={styles.IconDrawer} src="/icon-drawer.svg" alt="menu"/>
  </button>
)

const ButtonClose = (props) => (
  <button
    type="button"
    aria-controls="drawer-menu"
    aria-expanded={props.isDrawerOpen}
    className={styles.Button}
    onClick={props.onClick}>
    <img className={styles.IconCross} src="/icon-cross.svg" alt="close"/>
  </button>
)

const Wrapper = (props) => (
  <div className={classNames(styles.Wrapper, props.className)}>
    <div className={styles.TopBar}>{props.children}</div>
    <ul className={styles.Menu} role="navigation">
      <li className={styles.Item}>
        <a className={classNames(styles.Link, 'text-lead-text')} href="/" title="Home">Home</a>
      </li>
      <li className={styles.Item}>
        <a className={classNames(styles.Link, 'text-lead-text')} href="/about" title="About">About</a>
      </li>
      <li className={styles.Item}>
        <a className={classNames(styles.Link, 'text-lead-text')} href="/menu" title="Menu">Menu</a>
      </li>
      <li className={styles.Item}>
        <a className={classNames(styles.Link, 'text-lead-text')} href="/reservation" title="Reservation">Reservation</a>
      </li>
      <li className={styles.Item}>
        <a className={classNames(styles.Link, 'text-lead-text')} href="/order" title="Order online">Order online</a>
      </li>
      <li className={styles.Item}>
        <a className={classNames(styles.Link, 'text-lead-text')} href="/login" title="Login">Login</a>
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
      <ButtonToggle onClick={handleToggle} isDrawerOpen={isDrawerOpen}/>
      {createPortal(
        (<Wrapper className={{
          [styles.WrapperOpened]: isDrawerOpen
        }}>
          <ButtonClose onClick={handleToggle} isDrawerOpen={isDrawerOpen}/>
        </Wrapper>),
        document.body
      )}
    </>
  )
}

export default Drawer