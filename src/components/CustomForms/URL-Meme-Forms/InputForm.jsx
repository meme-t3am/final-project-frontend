import { useContext } from 'react';
import { FormButton, InputControl } from '../FormControl';
import styles from '../MemeForm.css';
import { MemeContext } from '../../Context/MemeContext';
import { memeResponseArrayOfArrays } from '../../Services/meme';

// FLOW
// input URL
// onChange, setState(e.target.value)
// onSubmit: handleSubmit(e.preventDefault(),
//  await fetch-function postURL() setState()) --- /imaggas/userPic
// receive (useEffect) Meme-url from fetch-function insertMeme()
// and render to page

export default function InputForm() {
  //consider moving url and setUrl into a useState - local to this form
  const { url, setUrl, setMeme } = useContext(MemeContext);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    const memeRes = await memeResponseArrayOfArrays(url);
    const sortedMemes = memeRes.sort((a, b) => b[0] - a[0]);
    //[0] gives us the sorted array we expect and helps with decimals
    console.log('sorted Memes', sortedMemes);
    setMeme(sortedMemes);
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
