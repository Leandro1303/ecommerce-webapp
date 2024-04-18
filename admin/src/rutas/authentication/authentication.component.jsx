import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import InputField from "../../componentes/input-field/input-field.component";
import { emailSignInStart } from '../../store/user/user.action';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';

import './authentication.styles.css';
import Spinner from '../../componentes/spinner/spinner.component.jsx';
// import Spinner from '../../componentes/spinner/spinner.component.jsx';

const defaultUser = {
  email: '',
  password: ''
}

const Authentication = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(defaultUser);
  const { email, password } = credentials;
  const [loading, setLoading] = useState(false);

  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', { replace: false });
      return;
    }
      setTimeout  (() => null, 1500); 
      navigate('/', { replace: false });
      setLoading(false);
  }, [navigate, currentUser]);

  const resetFormFields = () => {
    setCredentials(defaultUser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      dispatch(emailSignInStart(credentials))
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
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
          <button type="submit" className="addproduct-btn">{loading ? (<Spinner />) : "Login"}</button>
        </form>
      </div>
    </div>
  );
}

export default Authentication
