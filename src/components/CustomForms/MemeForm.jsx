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

export default function MemeForm() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.MemeForm}>
          <h1>Allegori</h1>
          <button onClick={logout}>Logout</button>
          <InputForm />
          <OutputForm />
        </div>
      )}

    <div className={styles.MemeForm}>
      <h1>Allegori</h1>
      <button onClick={logout}>Logout</button>
      <InputForm/>
      <OutputForm/>
      <OtherMemes />
    </div>
  );
}
