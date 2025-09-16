'use client'

import { createContext, useContext, ReactNode } from 'react'
import { ReservationContextType } from '@/types'

const ReservationContext = createContext<ReservationContextType | undefined>(undefined)

interface ReservationProviderProps {
  children: ReactNode
  value: ReservationContextType
}

export const ReservationProvider = ({ children, value }: ReservationProviderProps): React.JSX.Element => {
  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  )
}

export const useReservation = (): ReservationContextType => {
  const context = useContext(ReservationContext)
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider')
  }
  return context
}
