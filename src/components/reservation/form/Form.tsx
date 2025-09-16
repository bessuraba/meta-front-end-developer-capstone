import styles from './Form.module.css'
import { Form as FormikForm } from 'formik'

import React from 'react'
import { ChildrenProps } from '@/types'

const Form = ({ children }: ChildrenProps): React.JSX.Element => (
  <section className={styles.Wrapper}>
    <FormikForm className={styles.Form}>{children}</FormikForm>
  </section>
)

export default Form