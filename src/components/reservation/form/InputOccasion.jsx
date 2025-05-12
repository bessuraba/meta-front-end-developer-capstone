import styles from './InputOccasion.module.css'
import { ErrorBoundary } from 'react-error-boundary'
import Label from '../../Label'
import { useMemo, useState, useCallback } from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import { useReservationContext } from '../utils/ReservationContext'

const Icon = ({ className }) => (
  <svg
    className={classNames(styles.Icon, className)}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M31.437 25.5596C31.3047 25.2058 30.903 25.0234 30.5395 25.1521L27.8209 26.1154L26.2391 22.0527C28.6998 20.8082 29.9101 17.9427 28.9206 15.2941C28.4322 13.9876 26.6963 10.7729 24.7734 7.80942C24.4322 7.28301 23.7729 7.06138 23.1819 7.27119L20.6406 8.17163C20.233 8.31604 20.0589 8.79683 20.2796 9.16874C20.4412 9.44107 20.7803 9.57341 21.0787 9.46762L23.6108 8.57056C24.3884 9.77241 25.1339 11.0182 25.7777 12.1563L20.5161 14.0349C20.2885 14.1156 20.1208 14.3107 20.0753 14.5478L20.0723 14.5637C19.9737 15.0766 20.4694 15.503 20.9618 15.3282L26.4834 13.3711C27.0322 14.3957 27.451 15.2552 27.6414 15.7639C28.4127 17.8273 27.4224 20.1204 25.3867 20.9816C25.1004 21.1029 25.2121 21.0631 24.9173 21.1478C23.097 21.6721 21.1724 20.9175 20.1723 19.398C19.9226 19.0194 19.3817 18.9832 19.0849 19.3259C18.8847 19.557 18.8579 19.8958 19.0275 20.15C20.3032 22.0631 22.6673 23.0261 24.9629 22.522L26.5439 26.5822L23.9991 27.4839C23.6358 27.6127 23.4487 28.004 23.5807 28.3578C23.713 28.7117 24.1147 28.8943 24.4782 28.7652L31.0595 26.4333C31.4201 26.3025 31.6059 25.9142 31.437 25.5596ZM18.4518 9.27394L12.7992 7.27047C12.2082 7.06197 11.5496 7.27824 11.2077 7.80275C9.28693 10.77 7.54726 13.9505 7.05841 15.2591C6.06889 17.906 7.27945 20.7724 9.73989 22.0177L8.15853 26.1168L5.43989 25.1534C5.07655 25.0247 4.67454 25.2071 4.54241 25.5609C4.41015 25.9149 4.59758 26.306 4.96093 26.4348L11.5422 28.7667C11.9056 28.8956 12.3076 28.7131 12.4397 28.3592C12.572 28.0054 12.3846 27.6141 12.0213 27.4854L9.47656 26.5837L11.0575 22.5235C13.769 23.1195 16.5961 21.6809 17.5881 19.0294C18.0749 17.7279 18.8626 14.2042 19.3481 10.7384C19.4354 10.0997 19.0554 9.48881 18.4518 9.27394ZM16.2692 18.5603C15.498 20.6238 13.226 21.7598 11.0979 21.1468C10.8024 21.0637 10.8784 21.1017 10.6294 20.9793C8.59334 20.1181 7.60298 17.8258 8.37467 15.7615C8.56472 15.2528 8.9834 14.3933 9.53262 13.3688L16.9624 16.0021C16.7083 17.1293 16.4592 18.0538 16.2692 18.5603ZM17.2529 14.6555L10.203 12.1564C10.8447 11.0174 11.5539 9.77165 12.3686 8.5698L17.9578 10.5509C17.7594 11.958 17.5104 13.3806 17.2529 14.6555Z" />
  </svg>
)

const Arrow = ({ opened, className }) => (
  <svg
    className={classNames(styles.Arrow, {
      [styles.ArrowOpened]: opened
    }, className)}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4.75665 11.6105C4.94599 11.4055 5.20506 11.2488 5.46486 11.2488C5.6994 11.2488 5.93388 11.3335 6.11948 11.505L18.0002 22.4213L29.881 11.505C30.2728 11.1433 30.884 11.1659 31.2439 11.5596C31.6055 11.9514 31.5811 12.5596 31.1902 12.9213L18.6524 24.4946C18.2813 24.8375 17.7145 24.8375 17.3432 24.4946L4.80538 12.9213C4.41946 12.6111 4.39499 12.0023 4.75665 11.6105Z" />
  </svg>
)

const Select = ({ value, placeholder, error, onSelect }) => {
  const [isOpened, setIsOpened] = useState(false)
  const { occasions } = useReservationContext()

  const selected = useMemo(() => {
    return !_.isNil(value) && !_.isEmpty(value)
  }, [value])

  const content = useMemo(() => {
    if (!selected) {
      return placeholder
    }

    return _.find(occasions, { value }).name
  }, [value, placeholder, selected, occasions])

  const dropdownElements = useMemo(() => {
    return _.map(occasions, (occasion) => (
      <li
        key={occasion.value}
        className={classNames('text-highlight-text', styles.Option, {
          [styles.OptionSelected]: value === occasion.value
        })}
        onClick={() => {
          setIsOpened(false)
          onSelect(occasion.value)
        }}>
        {occasion.name}
      </li>
    ))
  }, [value, onSelect, occasions])

  return (
    <div className={styles.Input}>
      <button
        type="button"
        className={classNames('text-highlight-text', styles.Select, {
          [styles.SelectSelected]: selected,
          [styles.SelectError]: error
        })}
        onClick={() => setIsOpened(!isOpened)}>
        <Icon error={error} selected={selected}/>
        {content}
        <Arrow error={error} selected={selected} opened={isOpened}/>
      </button>
      {isOpened && <ul className={styles.Dropdown}>{dropdownElements}</ul>}
    </div>
  )
}

const InputOccasion = ({ field, form }) => {
  const error = useMemo(() => form.touched[field.name] && form.errors[field.name], [form, field.name])

  const handleChange = useCallback((input) => {
    field.onChange(field.name)(input)
  }, [field])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.Group}>
        <Label className={styles.Label} error={Boolean(error)}>Occasion</Label>
        <Select value={field.value} placeholder={'Occasion'} error={Boolean(error)} onSelect={handleChange} />
        {Boolean(error) && <span className={classNames('text-highlight-text', styles.Error)}>{error}</span>}
      </div>
    </ErrorBoundary>
  )
}

export default InputOccasion