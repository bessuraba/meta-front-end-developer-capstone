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

const Reservation = () => {
  const [step, setStep] = useState('reservation')
  const navigate = useNavigate()
  const [reservation, setReservation] = useOutletContext()

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
          initialValues={{}}
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