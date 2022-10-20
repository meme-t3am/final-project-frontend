import styles from '../MemeForm.css';
import MemeCard from './MemeCard';

// consider re-naming when approaching stretch goals
export default function OutputForm() {

  // Mapping through the array of arrays
  // Using the array from fetch memeResponseArrayofArrays() 
  return (
    <div className={styles.OutForm}><MemeCard/></div>
  );
}
