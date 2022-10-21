import { FormButton, InputControl } from '../FormControl';
import styles from '../MemeForm.css';
import { MemeContext } from '../../Context/MemeContext';
import { memeResponseArrayOfArrays } from '../../Services/meme';
import { useContext, useState } from 'react';

export default function InputForm() {
  const { setMeme, setSingleMeme, setDisplayUrl } = useContext(MemeContext);
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    const memeRes = await memeResponseArrayOfArrays(url);
    const sortedMemes = memeRes.sort((a, b) => b[0] - a[0]);
    const topMeme = sortedMemes[0];
    setSingleMeme(topMeme);
    const memes = [sortedMemes[1], sortedMemes[2], sortedMemes[3]];
    setMeme(memes);
    setDisplayUrl(url);
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
