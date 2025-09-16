import styles from './InputTime.module.css'
import { ErrorBoundary } from 'react-error-boundary'
import classNames from 'classnames'
import { useMemo, useCallback } from 'react'
import _ from 'lodash'
import Label from '../../Label'
import { useReservation } from '../utils/ReservationContext'

import React from 'react'
import { TimeItemProps, FormikFieldProps } from '@/types'

const Item = ({ children, className, value, error, selected, onClick }: TimeItemProps): React.JSX.Element => (
  <button
    type="button"
    className={classNames('text-card-title', styles.Item, {
      [styles.ItemSelected]: selected,
      [styles.ItemError]: Boolean(error),
    }, className)}
    onClick={() => onClick(value)}>
    {children}
  </button>
)

const InputTime = ({ field, form }: FormikFieldProps): React.JSX.Element => {
  const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00']
  const error = useMemo(() => form.touched[field.name] && form.errors[field.name], [form, field.name])

  const handleChange = useCallback((input: string) => {
    form.setFieldValue(field.name, input)
  }, [field, form])

  const items = useMemo(() => {
    return _.map(availableTimes, (time) => (
      <Item
        key={time}
        error={Boolean(error)}
        value={time}
        selected={field.value === time}
        onClick={handleChange}>
        {time}
      </Item>
    ))
  }, [error, field.value, handleChange, availableTimes])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.Group}>
        <Label className={styles.Label} error={Boolean(error)}>Time</Label>
        <div className={styles.Input}>
        {items}
        </div>
        {Boolean(error) && <span className={classNames('text-highlight-text', styles.Error)}>{error}</span>}
      </div>
    </ErrorBoundary>
  )
}

export default InputTime