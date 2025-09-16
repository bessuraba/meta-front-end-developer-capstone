import styles from './InputLastName.module.css'
import classNames from 'classnames'
import Label from '../../Label'
import { ErrorBoundary } from 'react-error-boundary'
import { useMemo } from 'react'
import _ from 'lodash'

import React from 'react'
import { FormikFieldProps } from '@/types'

const InputLastName = ({ field, form }: FormikFieldProps): React.JSX.Element => {
  const error = useMemo(() => form.touched[field.name] && form.errors[field.name], [form, field.name])

  const selected = useMemo(() => {
    return !_.isNil(field.value) && !_.isEmpty(field.value)
  }, [field.value])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.Group}>
        <Label htmlFor={field.name} className={styles.Label} error={Boolean(error)}>Last Name</Label>
        <input
          autoComplete="family-name"
          type="text"
          placeholder="Last Name"
          id={field.name}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          className={classNames('text-highlight-text', styles.Input, {
            [styles.InputSelected]: selected,
            [styles.InputError]: Boolean(error)
          })}/>
        {Boolean(error) && <span className={classNames('text-highlight-text', styles.Error)}>{error}</span>}
      </div>
    </ErrorBoundary>
  )
}

export default InputLastName