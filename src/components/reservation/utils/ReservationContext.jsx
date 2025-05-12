import { createContext, useContext, memo } from 'react'
import fetchAPI from './fetchAPI'

const defaultOccasions = [
  {
    name: 'Birthday',
    value: 'birthday'
  },
  {
    name: 'Anniversary',
    value: 'anniversary'
  },
  {
    name: 'Engagement',
    value: 'engagement'
  }
]

const defaultTimes = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']

const Context = createContext({
  occasions: defaultOccasions,
  availableTimes: defaultTimes
})

const Memorized = memo(({ children }) => (<>{children}</>))

export const useReservationContext = () => useContext(Context)

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{ occasions: defaultOccasions, availableTimes: fetchAPI(new Date()) }}>
      <Memorized>{children}</Memorized>
    </Context.Provider>
  )
}

export default Provider