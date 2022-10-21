import styles from './Header.css';
import { useUser } from '../../Context/UserContext';
import { signOutUser } from '../../Services/auth';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  
  const logout = async () => {
    navigate('/');
    await signOutUser();
    setUser({});
  };

  const handleDev = () => {
    navigate('/about');
  };

  const handleHome = () => {
    navigate('/meme');
  };

  return (
    <>
      <header className={styles.Header}>
        <h1>Allegori</h1>
        <button onClick={handleHome}>Home</button>
        <button onClick={handleDev}>About the Devs</button>
        <button onClick={logout}>Logout</button>
      </header>
    </>
  );
}
