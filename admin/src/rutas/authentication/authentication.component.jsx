import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import InputField from "../../componentes/input-field/input-field.component";
import { emailSignInStart } from '../../store/user/user.action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';

import './authentication.styles.css';
import Spinner from '../../componentes/spinner/spinner.component.jsx';

const defaultUser = {
  email: '',
  password: ''
}

const Authentication = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(defaultUser);
  const { email, password } = credentials;
  const [ isLoading, setIsLoading ] = useState(false);

  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { replace: false });
      return;
    }
    setTimeout(() => {
      navigate('/', { replace: false });
    }, 10);
  }, [navigate, currentUser]);

  const resetFormFields = () => {
    setCredentials(defaultUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      dispatch(emailSignInStart(credentials))
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
    resetFormFields();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="authentication">
      <div className="login-container">
        <h2>ADMIN PANEL</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <button
            type="submit"
            className="addproduct-btn"
          >
            {isLoading ? <Spinner /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Authentication
