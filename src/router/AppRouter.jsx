import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import CalendarPage from "../calendar/pages/CalendarPage";
import { Navigate } from "react-router-dom";

const AppRouter = () => {

  const authStatus = 'no autenticated';

  return (

       

    <Routes>

    { 
      ( authStatus === 'no autenticated' )
      ?<Route path="/auth/*" element={<LoginPage />} />
      :<Route path="/" element={<CalendarPage />} />
    }

      <Route path="/*" element={<Navigate to="/auth/login" />} />

    </Routes>
  )
}
export default AppRouter
