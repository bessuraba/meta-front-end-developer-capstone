import StepReservation from "./StepReservation"
import StepReviewInfo from './StepReviewInfo'
import Form from './form/Form'
import Header from './header/Header'
import Title from './header/Title'
import Main from '../Main'
import Back from './header/Back'
import { useState, useCallback, useMemo } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'


const Reservation = () => {
  const [step, setStep] = useState('reservation')
  const navigate = useNavigate()
  const { setReservation } = useOutletContext()

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

  const handleSubmit = useCallback(async (values) => {
    console.log(values)
    setReservation({ value: 'Test' })
    navigate('/reservation/complete')
  }, [navigate, setReservation])

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
            }
          }}
          validationSchema={Yup.object().shape({
            date: Yup.string().required('Required'),
            time: Yup.string().required('Required'),
            occasion: Yup.string().required('Required'),
            guests: Yup.object().shape({
              adults: Yup.number().min(1, 'Please select at least one adult visitor').max(9, 'Please select at most 9 adults'),
              children: Yup.number().max(9, 'Please select at most 9 children'),
              pets: Yup.number().max(9, 'Please select at most 9 pets')
            })
          })}
          validateOnChange
          onSubmit={handleSubmit}>
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} {...formik}>
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