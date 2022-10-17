import { FormButton, InputControl } from './FormControl';
import styles from './MemeForm.css';
import '../App.css';
import './MemeForm.css';

export default function MemeForm() {
  return (
    <div className={styles.MemeForm}>
      <h1>Allegori</h1>
      <div className={styles.Input}>
        <form>
          <InputControl label="Upload Image URL" type="text"></InputControl>

          <FormButton>Upload</FormButton>
        </form>
      </div>
      <div className={styles.Output}></div>
      <div></div>
    </div>
  );
}
