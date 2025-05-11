import styles from './InputNote.module.css'
import classNames from 'classnames'
import Label from '../../Label'
import { ErrorBoundary } from 'react-error-boundary'
import { useMemo } from 'react'
import _ from 'lodash'

const InputNote = ({ field }) => {
  const selected = useMemo(() => {
    return !_.isNil(field.value) && !_.isEmpty(field.value)
  }, [field.value])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.Group}>
        <Label htmlFor={field.name} className={styles.Label}>Notes (Optional)</Label>
        <textarea
          placeholder="Notes"
          id={field.name}
          name={field.name}
          value={field.value}
          onChange={field.onChange(field.name)}
          onBlur={field.onBlur(field.name)}
          className={classNames('text-highlight-text', styles.Input, {
            [styles.InputSelected]: selected
          })}/>
      </div>
    </ErrorBoundary>
  )
}

export default InputNote