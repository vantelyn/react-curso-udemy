import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";


export const LoginScreen = () => {

  const { dispatch } = useContext( AuthContext );

  const navigate = useNavigate();
  
  const handleLogin = () => {
    const path = localStorage.getItem('lastPath') || '/marvel';
    dispatch({
      type: types.login,
      payload: {
          name: 'Valentino Vespuci',
          email: 'var@gmail.com'
      }
    });
    navigate( path, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}
