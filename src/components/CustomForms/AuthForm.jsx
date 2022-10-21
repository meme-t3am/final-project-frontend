/* eslint-disable max-len */
/* eslint-disable react/prop-types */
// import components and pass properties needed
// build actual auth form here
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser, signInUser } from '../Services/auth';
import styles from '/src/components/App.css';
import { FormButton, InputControl } from './FormControl';
import { handleForm } from './HandleForm';

export default function AuthForm({ mode = 'signin' }) {
  const [data, handleChange] = handleForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await type.action(data);
    navigate('/meme');
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
      link: '../',
    },
    action: signUp,
  };
  const signin = {
    prompt: 'Sign In',
    button: 'Sign In',
    switch: {
      prompt: 'Need to create an account?',
      link: 'signup',
    },
    action: signIn,
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
      ></InputControl>

      <InputControl
        label="Email"
        name="email"
        type="email"
        onChange={(e) => handleChange(e)}
      ></InputControl>

      <InputControl
        label="Password"
        name="password"
        type="password"
        onChange={(e) => handleChange(e)}
      ></InputControl>

      <FormButton>Submit</FormButton>
      <nav>
        <Link to={type.switch.link}>{type.switch.prompt}</Link>
      </nav>
    </form>
  );
}
