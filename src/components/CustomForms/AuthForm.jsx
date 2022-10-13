// import components and pass properties needed
// build actual auth form here
import styles from './AuthForm.css';
import { FormButton, InputControl } from './FormControl';

export default function AuthForm() {
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
