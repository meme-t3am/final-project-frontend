import styles from './MemeForm.css';
import '../App.css';
import './MemeForm.css';
import OutputForm from './URL-Meme-Forms/OutputForm';
import InputForm from './URL-Meme-Forms/InputForm.jsx';
import { useUser } from '../Context/UserContext';
import { signOutUser } from '../Services/auth';
import { useNavigate } from 'react-router-dom';

export default function MemeForm() {

  const { setUser } = useUser();
  const navigate = useNavigate();

  const logout = async () => {
    navigate('/');
    await signOutUser();
    setUser({});
  };

  return (
    <div className={styles.MemeForm}>
      <h1>Allegori</h1>
      <button onClick={logout}>Logout</button>
      <InputForm/>
      <OutputForm/>
    </div>
  );
}
