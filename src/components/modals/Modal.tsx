import React from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps): React.JSX.Element => {
  return <div className={styles.Modal}>{children}</div>
}

export default Modal