// import components and pass properties needed
// build actual auth form here
import { signUpUser } from '../Services/auth';
import styles from './AuthForm.css';
import { FormButton, InputControl } from './FormControl';

export default function AuthForm() {
  const signUp = async (credentials) => {
    await signUpUser(credentials);
  }
  const signup = {
    prompt: 'Sign Up',
    button: 'Sign Up',
    switch: {
      prompt: 'Already have an account?',
      link: '../'
    }, 
    action: signUp
  }
  // const signin = {
  //   prompt: 'Sign In',
  //   button: 'Sign In',
  //   switch: {
  //     prompt: 'Need to create an account?',
  //     link: '../'
  //   }, 
  //   action: signIn
  // }
  const modes = {signup};
  const type = modes[mode];
  return (
    <form className={styles.AuthForm}>
      <h1>Sign up</h1>

      <InputControl
        label="User name"
        name="userName"
        type="text"
      >
      </InputControl>

      <InputControl
        label="Email"
        name="email"
        type="email"
        placeholder="MichaelScott@dundermifflin.com"
      >
      </InputControl>

      <InputControl
        label="Password"
        name="password"
        type="password"
      >
      </InputControl>

      <FormButton>Submit</FormButton>
    </form>
  );
}
