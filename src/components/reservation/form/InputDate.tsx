import styles from './InputDate.module.css'
import Label from '../../Label'
import { useMemo } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import { ErrorBoundary } from 'react-error-boundary'

const Icon = () => (
  <svg
    className={styles.Icon}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0938 4.5C12.5578 4.5 12.9375 4.87779 12.9375 5.34375V7.875H23.0625V5.34375C23.0625 4.87779 23.4422 4.5 23.9062 4.5C24.3703 4.5 24.75 4.87779 24.75 5.34375V7.875H26.4375C28.299 7.875 29.8125 9.38584 29.8125 11.25V28.125C29.8125 29.9865 28.299 31.5 26.4375 31.5H9.5625C7.69834 31.5 6.1875 29.9865 6.1875 28.125V11.25C6.1875 9.38584 7.69834 7.875 9.5625 7.875H11.25V5.34375C11.25 4.87779 11.6297 4.5 12.0938 4.5ZM28.125 14.625H7.875V28.125C7.875 29.0584 8.63068 29.8125 9.5625 29.8125H26.4375C27.3709 29.8125 28.125 29.0584 28.125 28.125V14.625ZM26.4375 9.5625H9.5625C8.63068 9.5625 7.875 10.3166 7.875 11.25V12.9375H28.125V11.25C28.125 10.3166 27.3709 9.5625 26.4375 9.5625Z"/>
  </svg>
)

import React from 'react'
import { FormikFieldProps } from '@/types'

const InputDate = ({ field, form }: FormikFieldProps): React.JSX.Element => {
  const error = useMemo(() => form.touched[field.name] && form.errors[field.name], [form, field.name])

  const selected = useMemo(() => {
    return !_.isNil(field.value) && !_.isEmpty(field.value)
  }, [field.value])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.Group}>
        <Label htmlFor={field.name} className={styles.Label} error={Boolean(error)}>Date</Label>
        <div className={styles.InputHolder}>
          <input
            type="text"
            placeholder="Select Date"
            id={field.name}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            className={classNames('text-highlight-text', styles.Input, {
              [styles.InputSelected]: selected,
              [styles.InputError]: Boolean(error)
            })}/>
          <div className={classNames(styles.Picker, {
            [styles.PickerError]: Boolean(error),
            [styles.PickerSelected]: selected
          })}>
            <Icon/>
            <input type="date" value={field.value} onChange={field.onChange}/>
          </div>
        </div>
        {Boolean(error) && <span className={classNames('text-highlight-text', styles.Error)}>{error}</span>}
      </div>
    </ErrorBoundary>
  )
}

export default InputDate