import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>

            <Route 
              path="/login"
              element={
                <PublicRoute>
                  <LoginScreen />
                </PublicRoute>
              } 
            />

            <Route
              path="/*" 
              element={ 
                <PrivateRoute>
                  <DashboardRoutes />
                </PrivateRoute> 
              }             
            />

        </Routes>
      </BrowserRouter>
  )
}
