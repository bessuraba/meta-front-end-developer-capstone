'use client'

import StepReservation from "./StepReservation"
import StepReviewInfo from './StepReviewInfo'
import Form from './form/Form'
import Header from './header/Header'
import Title from './header/Title'
import Main from '../Main'
import Back from './header/Back'
import { useState, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useReservation } from './utils/ReservationContext'
import { Formik } from 'formik'
import * as Yup from 'yup'
import submitAPI from './utils/submitAPI'
import { ReservationData, ReservationStep, FormikProps } from '@/types'


const Reservation = (): React.JSX.Element => {
  const [step, setStep] = useState<ReservationStep>('reservation')
  const router = useRouter()
  const { setReservation } = useReservation()

  const handleSetStepReservation = useCallback(() => {
    setStep('reservation')
  }, [setStep])

  const header = useMemo(() => {
    switch (step) {
      case 'reservation':
        return <Header>
          <Title>Reservation</Title>
        </Header>
      case 'info':
      default:
        return (
          <Header>
            <Back onClick={handleSetStepReservation} />
            <Title>Review info</Title>
          </Header>
        )
    }
  }, [step, handleSetStepReservation])

  const handleSetStepInfo = useCallback(() => {
    setStep('info')
  }, [setStep])

  const handleSubmit = useCallback(async (values: ReservationData): Promise<void> => {
    console.log(values)
    const result = submitAPI(values)

    if (!result) {
      return
    }

    setReservation(values)
    router.push('/reservation/complete')
  }, [router, setReservation])

  return (
    <>
      {header}
      <Main>
        <Formik
          initialValues={{
            date: '',
            time: '',
            occasion: '',
            guests: {
              adults: 0,
              children: 0,
              pets: 0
            },
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            sms: false,
            note: ''
          }}
          validationSchema={Yup.object().shape({
            date: Yup.string().required('Please specify a visit date'),
            time: Yup.string().required('Please specify a visit time'),
            occasion: Yup.string().required('Please select an occasion'),
            guests: Yup.object().shape({
              adults: Yup.number().min(1, 'Please select at least one adult visitor').max(9, 'Please select at most 9 adults'),
              children: Yup.number().max(9, 'Please select at most 9 children'),
              pets: Yup.number().max(9, 'Please select at most 9 pets')
            }),
            firstName: Yup.string().min(5, 'Please enter at least 2 characters').max(50, 'Please enter at most 50 characters').required('Please enter your first name'),
            lastName: Yup.string().min(5, 'Please enter at least 2 characters').max(50, 'Please enter at most 50 characters').required('Required'),
            email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
            phone: Yup.string().required('Please enter your phone number')
          })}
          validateOnChange
          onSubmit={handleSubmit}>
          {(formik) => (
            <Form>
              {step === 'reservation' && (
                <StepReservation onSubmit={handleSetStepInfo} formik={formik} />
              )}
              {step === 'info' && <StepReviewInfo formik={formik} />}
            </Form>
          )}
        </Formik>
      </Main>
    </>
  )
}

export default Reservation