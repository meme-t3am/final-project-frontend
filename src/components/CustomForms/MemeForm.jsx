import styles from './MemeForm.css';
import '../App.css';
import './MemeForm.css';
import OutputForm from './URL-Meme-Forms/OutputForm';
import InputForm from './URL-Meme-Forms/InputForm.jsx';
import { useUser } from '../Context/UserContext';
import { signOutUser } from '../Services/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import OtherMemes from './URL-Meme-Forms/OtherMemes';
import loaderImage from '/public/images/loader.png';

export default function MemeForm() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [apiLoader, setApiLoader] = useState(false);

  // this useEffect or our initial page load
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // this useEffect is for our Api calls
  useEffect(() => {
    setApiLoader(true);
    setTimeout(() => {
      setApiLoader(false);
    }, 2000);
  }, []);

  const logout = async () => {
    navigate('/');
    await signOutUser();
    setUser({});
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <img src={loaderImage} />
        </div>
      ) : (
        <div className={styles.MemeForm}>
          <div>
            <h1>Allegori</h1>
            <button onClick={logout}>Logout</button>
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
