import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';
import styles from '../MemeForm.css';

export default function MemeCard() {

  const { meme } = useContext(MemeContext);
  

  return (
    <div className={styles.Output}>
      {meme.map((memo) => (
        // setting the key to confidence
        <div key={memo[0]}>
          {/* targeting second index value in the array which is the url */}
          <img src={memo[1]} />
          {/* Do we want to display this to the user? */}
          {/* targeting first index value in the array which is confidence */}
          confidence: {memo[0]}
        </div>
      ))}
    </div>
  );
}
