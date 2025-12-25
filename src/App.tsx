import React from 'react'
import { Toaster } from "sonner"
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import 

function App() {

  return (
    <>
    <Toaster />
    <Routes>
      <Route index element={<Login />} />
      <Routes path="/dashboard/overview"
      element = {
        <DashboardLayout>
          <Overview />
        </DashboardLayout>
      }
    </Routes>
      
    </>
  )
}

export default App
