import { FormButton, InputControl } from '../FormControl';
import styles from '../MemeForm.css';
import { MemeContext } from '../../Context/MemeContext';
import { memeResponseArrayOfArrays } from '../../Services/meme';
import { useContext, useState } from 'react';

export default function InputForm() {
  const { setMeme } = useContext(MemeContext);
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  
  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    const memeRes = await memeResponseArrayOfArrays(url);
    // .sort() method sorts through array of memes and orders them by
    // highest to lowest confidence
    // a[0]/b[0] targets the first index of the array (confidence) 
    const sortedMemes = memeRes.sort((a, b) => b[0] - a[0]);
    const memes = [sortedMemes[0], sortedMemes[1], sortedMemes[2]];
    setMeme(memes);
  };

  return (
    <div className={styles.Input}>
      <form onSubmit={handleUrlSubmit}>
        <InputControl
          label="Upload Image URL"
          type="text"
          value={url}
          onChange={handleChange}
        />

        <FormButton>Upload</FormButton>
      </form>
    </div>
  );
}
