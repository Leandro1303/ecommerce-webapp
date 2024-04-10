import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import InputField from "../../componentes/input-field/input-field.component";
import { emailSignInStart } from '../../store/user/user.action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';

import './authentication.styles.css';

const defaultUser = {
  email: '',
  password: ''
}

const Authentication = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(defaultUser);
  const { email, password } = credentials;

  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { replace: false });
      return;
    }
    setTimeout(() => {
      navigate('/', { replace: false });
    }, 1000);
  }, [navigate, currentUser]);

  const resetFormFields = () => {
    setCredentials(defaultUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(credentials))
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
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
          <button type="submit" className="addproduct-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Authentication
