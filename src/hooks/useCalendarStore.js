
import React from 'react'
import { useSelector } from 'react-redux'

export const useCalendarStore = () => {
  
  const { events, activeEvent } = useSelector( state => state.calendar);
  
    return (
        events,
        activeEvent
  )

}

export default useCalendarStore
