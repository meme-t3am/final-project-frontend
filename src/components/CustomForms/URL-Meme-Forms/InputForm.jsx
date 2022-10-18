import { useContext } from 'react';
import { FormButton, InputControl } from '../FormControl';
import styles from '../MemeForm.css';
import { MemeContext } from '../../Context/MemeContext';
import { insertMeme } from '../../Services/meme';

// FLOW
// input URL
// onChange, setState(e.target.value)
// onSubmit: handleSubmit(e.preventDefault(),
//  await fetch-function postURL() setState()) --- /imaggas/userPic
// receive (useEffect) Meme-url from fetch-function insertMeme()
// and render to page

export default function InputForm() {

  const { url, setUrl, setMeme } = useContext(MemeContext);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    const memeRes = await insertMeme(url);
    setMeme(memeRes);
  };

  return (
    <div className={styles.Input}>
      <form onSubmit={handleUrlSubmit}>
        <InputControl label="Upload Image URL" type="text" value={url}
          onChange={handleChange} />

        <FormButton>Upload</FormButton>
      </form>
    </div>
  );
}
