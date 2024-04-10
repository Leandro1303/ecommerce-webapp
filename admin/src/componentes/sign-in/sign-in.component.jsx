import { useState } from 'react';
import { fetchUser, loginUser } from '../../utils/backend.js';

import InputField from '../input-field/input-field.component.jsx'
import './sign-in.styles.css'

const defaultUser = {
  email: '',
  password: ''
}

const SignIn = () => {
  const [credentials, setCredentials] = useState(defaultUser);
  const { email, password } = credentials;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(credentials);
      const response = await fetchUser();
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="authentication">
      <div className='sign-in'>
        <div className="sign-in-container">
          <h1>Sing In Form</h1>
          <form onSubmit={handleSubmit}>
            <InputField
              type='text'
              placeholder='Email'
              onChange={changeHandler}
              value={email}
              name='email'
            />
            <InputField
              type='password'
              placeholder='Password'
              onChange={changeHandler}
              value={password}
              name='password'
            />
            <button type='submit' className='addproduct-btn'>Sing In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
