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

  return (
    <>
      <header className={styles.Header}>
        <h1>Allegori</h1>
        <button onClick={logout}>Logout</button>
      </header>
    </>
  );
}
