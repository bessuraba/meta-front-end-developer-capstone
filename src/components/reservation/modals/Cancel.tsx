'use client'

import styles from './Cancel.module.css'
import Button from '../form/Button'
import Background from '../../modals/Background'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import Modal from '../../modals/Modal'
import Header from '../../modals/Header'
import Body from '../../modals/Body'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

const Cancel = (): React.JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const router = useRouter()

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} aria-controls=''>Cancel Reservation</Button>
      {isModalOpen && typeof window !== 'undefined' && createPortal(
        <>
          <Background onClick={() => setIsModalOpen(false)}/>
          <Modal>
            <Header>Cancel Reservation</Header>
            <Body>
              <p className={classNames('text-paragraph', styles.Description)}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. </p>
              <Button onClick={() => {
                setIsModalOpen(false)
                router.push('/reservations')
              }}>Cancel</Button>
            </Body>
          </Modal>
        </>,
        document.body
      )}
    </>
  )
}

export default Cancel