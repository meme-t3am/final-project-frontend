/* eslint-disable max-len */
/* eslint-disable react/prop-types */
// import components and pass properties needed
// build actual auth form here
import { Link } from 'react-router-dom';
import { signUpUser, signInUser } from '../Services/auth';
import styles from './AuthForm.css';
import { FormButton, InputControl } from './FormControl';
import { handleForm } from './HandleForm';

export default function AuthForm({ mode = 'signin' }) {

  const [data, handleChange] = handleForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(data);
    // window.location.replace('/');
  };

  const signUp = async (credentials) => {
    await signUpUser(credentials);
  };

  const signIn = async (credentials) => {
    await signInUser(credentials);
  };

  const signup = {
    prompt: 'Sign Up',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '../'
    }, 
    action: signUp
  };
  const signin = {
    prompt: 'Sign In',
    button: 'Sign In',
    switch: {
      prompt: 'Need to create an account?',
      link: 'signup'
    }, 
    action: signIn
  };
  const modes = { signup, signin };

  const type = modes[mode];

  return (
    <form className={styles.AuthForm} onSubmit={(e) => handleSubmit(e)}>
      <h1>{type.prompt}</h1>

      <InputControl
        label="User name"
        name="userName"
        type="text"
        onChange={(e) => handleChange(e)}
      >
      </InputControl>

      <InputControl
        label="Email"
        name="email"
        type="email"
        placeholder="MichaelScott@dundermifflin.com"
        onChange={(e) => handleChange(e)}
      >
      </InputControl>

      <InputControl
        label="Password"
        name="password"
        type="password"
        onChange={(e) => handleChange(e)}
      >
      </InputControl>

      <FormButton>Submit</FormButton>
      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
