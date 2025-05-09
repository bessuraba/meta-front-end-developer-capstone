import styles from './InputDate.module.css'
import DatePicker from 'react-datepicker'
import Label from '../../Label'
import { useMemo, useCallback, forwardRef, useState } from 'react'
import moment from 'moment'
import _ from 'lodash'
import classNames from 'classnames'
import { ErrorBoundary } from 'react-error-boundary'

const Icon = ({ className, error }) => (
  <svg
    className={classNames(styles.Icon, {
      [styles.IconError]: error
    }, className)}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0938 4.5C12.5578 4.5 12.9375 4.87779 12.9375 5.34375V7.875H23.0625V5.34375C23.0625 4.87779 23.4422 4.5 23.9062 4.5C24.3703 4.5 24.75 4.87779 24.75 5.34375V7.875H26.4375C28.299 7.875 29.8125 9.38584 29.8125 11.25V28.125C29.8125 29.9865 28.299 31.5 26.4375 31.5H9.5625C7.69834 31.5 6.1875 29.9865 6.1875 28.125V11.25C6.1875 9.38584 7.69834 7.875 9.5625 7.875H11.25V5.34375C11.25 4.87779 11.6297 4.5 12.0938 4.5ZM28.125 14.625H7.875V28.125C7.875 29.0584 8.63068 29.8125 9.5625 29.8125H26.4375C27.3709 29.8125 28.125 29.0584 28.125 28.125V14.625ZM26.4375 9.5625H9.5625C8.63068 9.5625 7.875 10.3166 7.875 11.25V12.9375H28.125V11.25C28.125 10.3166 27.3709 9.5625 26.4375 9.5625Z"/>
  </svg>
)

const Input = forwardRef(({ value, onClick, className, name, form, isOpened, placeholder }, ref) => {
  const content = useMemo(() => {
    if (_.isNil(value) || _.isEmpty(value)) {
      return placeholder
    }

    return value
  }, [value, placeholder])

  const error = useMemo(() => form.touched[name] && form.errors[name], [form, name])

  return (
    <div className={styles.Group}>
      <Label className={styles.Label} error={Boolean(error)}>Date</Label>
      <button type="button" className={classNames('text-highlight-text', styles.Input, {
        [styles.InputError]: Boolean(error),
        [styles.InputOpened]: isOpened
      }, className)} onClick={onClick} ref={ref}>
        <Icon error={Boolean(error)}/>
        {content}
      </button>
      {Boolean(error) && <span className={classNames('text-highlight-text', styles.Error)}>{error}</span>}
    </div>
  )
})

const InputDate = ({ field, form }) => {
  const [isOpened, setIsOpened] = useState(false)
  const value = useMemo(() => {
    if (_.isNil(field.value) || _.isEmpty(field.value)) {
      return null
    }

    return moment(field.value, 'MM/DD/YYYY')
  }, [field.value])

  const input = useMemo(() => {
    return (
      <Input name={field.name} form={form} isOpened={isOpened} />
    )
  }, [field.name, form, isOpened])

  const handleChange = useCallback((input) => {
    const output = moment(input).format('MM/DD/YYYY')
    field.onChange(field.name)(output)
  }, [field])

  const handleCalendarOpen = useCallback(() => {
    setIsOpened(true)
  }, [setIsOpened])

  const handleCalendarClose = useCallback(() => {
    setIsOpened(false)
  }, [setIsOpened])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <DatePicker
        selected={value}
        onChange={handleChange}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        customInput={input}
        name={field.name}
        form={form}
        isOpened={isOpened}
        closeOnScroll
        placeholderText='Select Date'
      />
    </ErrorBoundary>
  )
}

export default InputDate