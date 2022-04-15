import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { login } from '../actions/auth'
import { JournalScreen } from '../components/journal/JournalScreen'
import { auth } from '../firebase/firebaseConfig'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState( true );

  useEffect( () => {
    
    auth.onAuthStateChanged( ( user ) => {
      if( user?.uid ){
        dispatch( login(user.uid, user.displayName) );
      }
      setChecking( false );
    })
  
  }, [ dispatch, setChecking ])

  if( checking ) {
    return <h1>Espere...</h1>
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route 
            path='/' 
            element={
              <PrivateRoute children={ <JournalScreen /> } />
            } 
          />
          <Route 
            path='/auth/*' 
            element={            
              <PublicRoute children={ <AuthRouter /> } />
            } 
          />
          <Route path='*' element={<Navigate to={'/auth/login'}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
