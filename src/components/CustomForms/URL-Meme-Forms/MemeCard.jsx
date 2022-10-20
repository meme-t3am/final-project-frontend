import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';
import styles from '../MemeForm.css';

export default function MemeCard() {

  const { meme, click } = useContext(MemeContext);
  

  return (
    <div className={styles.Favorites}>
      {click
       && 
      meme.map((memo) => (
        <div key={memo[0]}>
          <img src={memo[1]} />
        </div>
      ))}
    </div>
  );
}
