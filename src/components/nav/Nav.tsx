'use client'

import React from 'react'
import styles from "./Nav.module.css"
import Logo from "./Logo"
import Navigation from "./Navigation"
import Drawer from "./Drawer"

const Nav = (): React.JSX.Element => (
  <nav className={styles.Wrapper}>
    <div className={styles.Container}>
      <Drawer />
      <Logo />
      <Navigation />
    </div>
  </nav>
)

export default Nav