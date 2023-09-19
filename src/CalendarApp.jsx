import React from 'react';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const CalendarApp = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
export default CalendarApp
