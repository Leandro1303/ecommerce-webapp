import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'
import { emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            dispatch(emailSignInStart(formFields));
            resetFormFields();
            navigate('/');
        } catch (error) {
            console.log(error.code);
            switch(error.code) {
                case 'auth/wrong-password':
                    return alert('Incorrect password for this email.');
                
                case 'auth/user-not-found':
                    return alert('No user associated with this email.');
                default: break;
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;