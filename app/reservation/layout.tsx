'use client'

import { useState, ReactNode } from 'react'
import { ReservationProvider } from '../../src/components/reservation/utils/ReservationContext'
import { ReservationData } from '../../src/types'

interface ReservationLayoutProps {
  children: ReactNode
}

export default function ReservationLayout({ children }: ReservationLayoutProps): React.JSX.Element {
  const [reservation, setReservation] = useState<ReservationData>({} as ReservationData)
  
  return (
    <ReservationProvider value={{ reservation, setReservation }}>
      {children}
    </ReservationProvider>
  )
}
