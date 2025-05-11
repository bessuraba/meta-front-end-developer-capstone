import styles from './Cancel.module.css'
import Button from '../form/Button'
import Background from '../../modals/Background'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import Modal from '../../modals/Modal'
import Header from '../../modals/Header'
import Body from '../../modals/Body'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

const Cancel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} aria-controls=''>Cancel Reservation</Button>
      {isModalOpen && createPortal(
        <>
          <Background onClick={() => setIsModalOpen(false)}/>
          <Modal>
            <Header>Cancel Reservation</Header>
            <Body>
              <p className={classNames('text-paragraph', styles.Description)}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. </p>
              <Button onClick={() => {
                setIsModalOpen(false)
                navigate('/reservations')
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