import { Link } from "react-router-dom"
import validator from 'validator';
import { useForm } from "@vantelyn/custom-hooks"
import { removeError, setError } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startEmailRegister } from "../../actions/auth";

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const initialState = {
    name: 'Patatin',
    email: 'vantelyn2@gmail.com',
    password: '123456',
    cfPassword: '123456'
  };

  const [{ name, email, password, cfPassword }, handleInputChange] = useForm(initialState);

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch( startEmailRegister( email, password, name ) );
    }
  }

  const isFormValid = () => {
    // 
    if (name.trim().length === 0) {
      const err = setError('A name is required');
      dispatch(err);
      return false;
    };
    if (!validator.isEmail(email)) {
      const err = setError('Email is not valid');
      dispatch(err);
      return false;
    };
    if (password !== cfPassword) {
      const err = setError('Passwords are not the same');
      dispatch(err);
      return false;
    };

    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form 
        onSubmit={handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >

        {
          msgError &&
          (
            <div className="auth__alert-error" >
              {msgError}
            </div>
          )
        }

        <input
          type='text'
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type='password'
          placeholder="Confirm password"
          name="cfPassword"
          className="auth__input"
          value={cfPassword}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>

        <Link
          className="link mt-5"
          to="/auth/login"
        >
          Already registered?
        </Link>
      </form>
    </>
  )
}
