import styles from './MemeForm.css';
import '../App.css';
import './MemeForm.css';
import OutputForm from './URL-Meme-Forms/OutputForm';
import InputForm from './URL-Meme-Forms/InputForm.jsx';

export default function MemeForm() {

  return (
    <div className={styles.MemeForm}>
      <h1>Allegori</h1>
      <InputForm/>
      <OutputForm/>
    </div>
  );
}
