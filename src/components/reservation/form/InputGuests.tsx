import React from 'react'
import styles from './InputGuests.module.css'
import { ErrorBoundary } from 'react-error-boundary'
import classNames from 'classnames'
import { useMemo, useCallback } from 'react'
import Label from '../../Label'
import { FormikFieldProps, GuestInputProps, GuestCountProps, ChildrenProps } from '@/types'

const IconPlus = () => (
  <svg className={styles.Icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.75 15.25H27.25C27.6625 15.25 28 15.5875 28 16C28 16.4125 27.6625 16.75 27.25 16.75H16.75V27.25C16.75 27.6625 16.4125 28 15.9578 28C15.5875 28 15.2078 27.6625 15.2078 27.25V16.75H4.75C4.33581 16.75 4 16.4125 4 16C4 15.5875 4.33581 15.25 4.75 15.25H15.2078V4.75C15.2078 4.33581 15.5875 4 15.9578 4C16.4125 4 16.75 4.33581 16.75 4.75V15.25Z"/>
  </svg>
)

const IconMinus = () => (
  <svg className={styles.Icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 16C28 16.5077 27.5846 16.9231 27.0769 16.9231H4.92308C4.41285 16.9231 4 16.5106 4 16.0006C4 15.4923 4.41308 15.0769 4.92308 15.0769H27.0769C27.5846 15.0769 28 15.4923 28 16Z" />
  </svg>
)

const Increment = ({ error, onClick }: { error: boolean; onClick: () => void }): React.JSX.Element => (
  <div className={styles.ContainerIncrement}>
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.Button, {
        [styles.ButtonError]: error
      })}>
      <IconPlus/>
    </button>
  </div>
)

const Decrement = ({ error, onClick }: { error: boolean; onClick: () => void }): React.JSX.Element => (
  <div className={styles.ContainerDecrement}>
    <button
      type="button"
      onClick={onClick}
      className={classNames(styles.Button, {
        [styles.ButtonError]: error
      })}>
      <IconMinus/>
    </button>
  </div>
)

const Count = ({ children, error, selected }: GuestCountProps): React.JSX.Element => (
  <div className={classNames('text-section-title', styles.ContainerCount, {
    [styles.ContainerCountSelected]: selected,
    [styles.ContainerCountError]: error
  })}>{children}</div>
)

const Heading = ({ children }: ChildrenProps): React.JSX.Element => (
  <p className={classNames('text-specials-text', styles.Heading)}>{children}</p>
)

const Description = ({ children }: ChildrenProps): React.JSX.Element => (
  <p className={classNames('text-highlight-text', styles.Description)}>{children}</p>
)

const Adults = ({ error, value, onChange }: GuestInputProps): React.JSX.Element => {
  const handleIncrement = useCallback(() => {
    onChange({ adults: Math.min(value + 1, 9) })
  }, [value, onChange])

  const handleDecrement = useCallback(() => {
    onChange({ adults: Math.max(value - 1, 0) })
  }, [value, onChange])
  return (
    <div className={classNames(styles.Section, {
      [styles.SectionError]: error
    })}>
      <div className={styles.ContainerInfo}>
        <Heading>Adults</Heading>
        <Description>Ages 13 or above</Description>
      </div>
      <Increment onClick={handleIncrement} error={error}/>
      <Count error={error} selected={value > 0}>{value}</Count>
      <Decrement onClick={handleDecrement} error={error}/>
    </div>
  )
}

const Children = ({ error, value, onChange }: GuestInputProps): React.JSX.Element => {
  const handleIncrement = useCallback(() => {
    onChange({ children: Math.min(value + 1, 9) })
  }, [value, onChange])

  const handleDecrement = useCallback(() => {
    onChange({ children: Math.max(value - 1, 0) })
  }, [value, onChange])
  return (
    <div className={classNames(styles.Section, {
      [styles.SectionError]: error
    })}>
      <div className={styles.ContainerInfo}>
        <Heading>Children</Heading>
        <Description>Ages 12 or under</Description>
      </div>
      <Increment onClick={handleIncrement} error={error}/>
      <Count error={error} selected={value > 0}>{value}</Count>
      <Decrement onClick={handleDecrement} error={error}/>
    </div>
  )
}

const Pets = ({ error, value, onChange }: GuestInputProps): React.JSX.Element => {
  const handleIncrement = useCallback(() => {
    onChange({ pets: Math.min(value + 1, 9) })
  }, [value, onChange])

  const handleDecrement = useCallback(() => {
    onChange({ pets: Math.max(value - 1, 0) })
  }, [value, onChange])
  return (
    <div className={classNames(styles.Section, {
      [styles.SectionError]: error
    })}>
      <div className={styles.ContainerInfo}>
        <Heading>Pets</Heading>
      </div>
      <Increment onClick={handleIncrement} error={error}/>
      <Count error={error} selected={value > 0}>{value}</Count>
      <Decrement onClick={handleDecrement} error={error}/>
    </div>
  )
}

const InputGuests = ({ field, form }: FormikFieldProps): React.JSX.Element => {
  const error = useMemo(() => form.touched[field.name] && form.errors[field.name], [form, field.name])

  const handleChange = useCallback((input: Partial<{ adults: number; children: number; pets: number }>) => {
    console.log('input', input, { ...field.value, ...input }, form)
    form.setFieldValue(field.name, { ...field.value, ...input })
  }, [field, form])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.Group}>
        <Label className={styles.Label} error={Boolean(error)}>Number Of Guests</Label>
        <div className={styles.Input}>
          <Adults error={Boolean(error)} value={field.value.adults} onChange={handleChange}/>
          <Children error={Boolean(error)} value={field.value.children} onChange={handleChange}/>
          <Pets error={Boolean(error)} value={field.value.pets} onChange={handleChange}/>
        </div>
        {Boolean(error) && (
          <span className={classNames('text-highlight-text', styles.Error)}>
            {typeof error === 'object' && error !== null ? Object.values(error).join(', ') : String(error)}
          </span>
        )}
      </div>
    </ErrorBoundary>
  )
}

export default InputGuests