import { useState } from 'react';

import InputField from '../input-field/input-field.component.jsx'
import './sign-in.styles.css'

const defaultUser = {
  email: '',
  password: ''
}

const SignIn = () => {
  const [user, setUser] = useState(defaultUser);
  const { email, password } = user;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log(user);
  }

  return (
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
            required
          />
          <InputField
            type='password'
            placeholder='Password'
            onChange={changeHandler}
            value={password}
            name='password'
            required
          />
          <button type='submit' className='addproduct-btn'>Sing In</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
