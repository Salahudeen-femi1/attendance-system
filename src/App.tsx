import React from 'react'
import { Toaster } from "sonner"
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import DashboardLayout from './layout/DashboardLayout'
import Overview from './pages/Overview'
import RegisterStaff from './pages/registerStaff'
import FingerprintEnrollment from './pages/fingerprintEnrollment'
import AttendanceRecord from './pages/AttendanceRecord'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/dashboard/overview"
          element={
            <DashboardLayout pageName="Overview"
              children={<Overview />}
            />
          }
        />
        <Route
          path="/dashboard/registerStaff"
          element={
            <DashboardLayout pageName="Register Staff"
              children={<RegisterStaff />}
            />
          }
        />
        <Route
          path="/dashboard/fingerprintEnrollment"
          element={
            <DashboardLayout pageName="Fingerprint Enrollment"
              children={<FingerprintEnrollment />}
            />
          }
        />
        <Route
          path="/dashboard/attendanceRecords"
          element={
            <DashboardLayout pageName="Attendance Records"
              children={<AttendanceRecord />}
            />
          }
        />
        <Route
          path="/dashboard/reports"
          element={
            <DashboardLayout pageName="Reports"
              children={<Reports />}
            />
          }
        />
        <Route
          path="/dashboard/registerStaff"
          element={
            <DashboardLayout pageName="Register Staff"
              children={<RegisterStaff />}
            />
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <DashboardLayout pageName="Settings"
              children={<Settings />}
            />
          }
        />
      </Routes>

    </>
  )
}

export default App
