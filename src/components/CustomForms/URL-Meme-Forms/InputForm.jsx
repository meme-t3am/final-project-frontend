import { useContext } from 'react';
import { FormButton, InputControl } from '../FormControl';
import styles from '../MemeForm.css';
import { MemeContext } from '../../Context/MemeContext';

// onSubmit <InputControl/> hit post route /imaggas/userPic (fetch here)
// /POST will be both a POST and 'get' getData()
// result (data returned) will be a meme url (getMemes())
// 

// data flow - post to Memes => return meme URL => set in state => accessed by

// dummy onSubmit will take in gibberish and return the mock url

export default function InputForm() {

  const { url, setUrl } = useContext(MemeContext);

  return (
    <div className={styles.Input}>
      <form>
        <InputControl label="Upload Image URL" type="text"></InputControl>

        <FormButton>Upload</FormButton>
      </form>
    </div>
  );
}
