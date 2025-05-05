import styles from './Form.module.css'
import { Form as FormikForm } from 'formik'

const Form = ({ children }) => (
  <section className={styles.Wrapper}>
    <FormikForm className={styles.Form}>{children}</FormikForm>
  </section>
)

export default Form