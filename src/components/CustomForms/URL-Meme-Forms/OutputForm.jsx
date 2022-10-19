import { useContext } from 'react';
import { MemeContext } from '../../Context/MemeContext';
import styles from '../MemeForm.css';

// consider re-naming when approaching stretch goals
export default function OutputForm() {
  const { meme } = useContext(MemeContext);

  return (
    <div className={styles.Output}>
      
      <img src={meme[1]}
      />
      {/* Do we want to display this to the user? */}
      confidence: {meme[0]}
    </div>
  );
}
