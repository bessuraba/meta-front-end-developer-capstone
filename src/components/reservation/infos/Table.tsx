import styles from './Table.module.css'
import classNames from 'classnames'
import { useMemo } from 'react'
import _ from 'lodash'
import { useReservation } from '../utils/ReservationContext'

import React from 'react'
import { DataProps } from '@/types'

const Table = ({ data }: DataProps): React.JSX.Element => {
  const occasions = [
    { value: 'birthday', name: 'Birthday' },
    { value: 'anniversary', name: 'Anniversary' },
    { value: 'business', name: 'Business' },
    { value: 'other', name: 'Other' }
  ]
  const occasion = useMemo(() => {
    const found = _.find(occasions, { value: data.occasion })
    return found?.name || data.occasion
  }, [data.occasion, occasions])

  const guests = useMemo(() => {
    if (!data.guests) return 'No guests specified'
    
    const result = [`${data.guests.adults || 0} Adults`]

    if (data.guests.children > 0) {
      result.push(`${data.guests.children} Children`)
    }

    if (data.guests.pets > 0) {
      result.push(`${data.guests.pets} Pets`)
    }

    return result.join(', ')
  }, [data.guests])

  return (
    <div className={styles.Wrapper}>
      <p className={classNames('text-card-title', styles.Header)}>Table is reserved for you</p>
      <ul className={styles.Info}>
        <li className={classNames('text-highlight-text', styles.Item)}>
          <img src={'/icon-calendar.svg'} alt="calendar"/>
          {data.date || 'No date specified'}
        </li>
        <li className={classNames('text-highlight-text', styles.Item)}>
          <img src={'/icon-clock.svg'} alt="clock"/>
          {data.time || 'No time specified'}
        </li>
        <li className={classNames('text-highlight-text', styles.Item)}>
          <img src={'/icon-champagne-glasses.svg'} alt="champagne-glasses"/>
          {occasion || 'No occasion specified'}
        </li>
        <li className={classNames('text-highlight-text', styles.Item)}>
          <img src={'/icon-people.svg'} alt="people"/>
          {guests}
        </li>
      </ul>
    </div>
  )
}

export default Table