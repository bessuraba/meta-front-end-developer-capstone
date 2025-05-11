import styles from './InputSMS.module.css'
import classNames from 'classnames'
import { ErrorBoundary } from 'react-error-boundary'

const InputSMS = ({ field }) => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <div className={styles.Group}>
        <label htmlFor={field.name} className={styles.Checkbox}>
          <img src={field.value ? '/icon-circle-checked.svg' : '/icon-circle.svg'} alt="checkmark" className={styles.Checkmark}/>
          <span className={classNames('text-card-title', styles.Label)}>SMS Reminder</span>
          <input
            type="checkbox"
            id={field.name}
            name={field.name}
            value={field.value}
            onChange={field.onChange(field.name)}
            onBlur={field.onBlur(field.name)}
            className={styles.Input}/>
        </label>
      </div>
    </ErrorBoundary>
  )
}

export default InputSMS