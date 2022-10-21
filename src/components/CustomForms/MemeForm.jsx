import styles from './MemeForm.css';
import '../App.css';
import './MemeForm.css';
import OutputForm from './URL-Meme-Forms/OutputForm';
import InputForm from './URL-Meme-Forms/InputForm.jsx';
import { useContext, useEffect, useState } from 'react';
import OtherMemes from './URL-Meme-Forms/OtherMemes';
import loaderImage from '/public/images/Llegor_Floating_Outline.png';
import { MemeContext } from '../Context/MemeContext';

export default function MemeForm() {
  const { displayUrl } = useContext(MemeContext);
  const [loading] = useState(false);
  const [apiLoader, setApiLoader] = useState(false);

  // // this useEffect or our initial page load
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);

  // this useEffect is for our Api calls
  useEffect(() => {
    setApiLoader(true);
    setTimeout(() => {
      setApiLoader(false);
    }, 2000);
  }, [displayUrl]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <img src={loaderImage} />
        </div>
      ) : (
        <div className={styles.MemeForm}>
          <div>
            <InputForm />
            {apiLoader ? (
              <div className={styles.loaderContainer}>
                <img src={loaderImage} />
              </div>
            ) : (
              <>
                <OutputForm />
                <OtherMemes />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
