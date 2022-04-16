import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

  const { uid } = useSelector( store => store.auth );
  return uid
    ? children
    : <Navigate to='/auth/login' />
}
