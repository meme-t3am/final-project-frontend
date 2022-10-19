import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';
import styles from '../MemeForm.css';

// consider re-naming when approaching stretch goals
export default function OutputForm() {
  const { meme } = useContext(MemeContext);

  return (
    <div className={styles.Output}>
      {meme.map((memo) => (
        <div key={memo[0]}>
          <img src={memo[1]} />
          {/* Do we want to display this to the user? */}
          confidence: {memo[0]}
        </div>
      ))}
    </div>
  );
}
