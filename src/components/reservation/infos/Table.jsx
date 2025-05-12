import styles from './Table.module.css'
import classNames from 'classnames'
import { useMemo } from 'react'
import _ from 'lodash'
import { useReservationContext } from '../utils/ReservationContext'

const Table = ({ data }) => {
  const { occasions } = useReservationContext()
  const occasion = useMemo(() => {
    return _.find(occasions, { value: data.occasion }).name
  }, [data.occasion, occasions])

  const guests = useMemo(() => {
    const result = [`${data.guests.adults} Adults`]

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
          {data.date}
        </li>
        <li className={classNames('text-highlight-text', styles.Item)}>
          <img src={'/icon-clock.svg'} alt="clock"/>
          {data.time}
        </li>
        <li className={classNames('text-highlight-text', styles.Item)}>
          <img src={'/icon-champagne-glasses.svg'} alt="champagne-glasses"/>
          {occasion}
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