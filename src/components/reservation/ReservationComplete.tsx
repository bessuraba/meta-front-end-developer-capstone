'use client'

import Header from './header/Header'
import Main from '../Main'
import Title from './header/Title'
import { useReservation } from './utils/ReservationContext'
import Bottom from './containers/Bottom'
import Reservations from './links/Reservations'
import Section from './containers/Confirmation'
import Top from './containers/Top'
import Left from './containers/Left'
import Right from './containers/Right'
import styles from './ReservationComplete.module.css'
import classNames from 'classnames'
import _ from 'lodash'
import Table from './infos/Table'
import Contacts from './infos/Contacts'
import Notes from './infos/Notes'
import Cancel from './modals/Cancel'

const ReservationComplete = (): React.JSX.Element => {
  const { reservation } = useReservation()

  return (
    <>
      <Header>
        <Title>Confirmation</Title>
      </Header>
      <Main>
        <Section>
          <Top>
            <Left className={styles.Left}>
              <h2 className={classNames('text-sub-title', styles.Title)}>Table Info</h2>
              <Table data={reservation} />
            </Left>
            <Right className={styles.Right}>
              <h2 className={classNames('text-sub-title', styles.Title)}>Contact Info</h2>
              <Contacts data={reservation} />
              {!_.isEmpty(reservation.note) && (
                <>
                  <h2 className={classNames('text-sub-title', styles.Title)}>Notes</h2>
                  <Notes data={reservation} />
                </>
              )}
            </Right>
          </Top>
          <Bottom>
            <Cancel />
            <Reservations />
          </Bottom>
        </Section>
      </Main>
    </>
  )
}

export default ReservationComplete
