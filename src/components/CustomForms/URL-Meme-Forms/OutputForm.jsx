import styles from '../MemeForm.css';
import TopMemeCard from './TopMemeCard';

export default function OutputForm() {

  return (
    <section className={styles.Output}>
      <TopMemeCard/>
    </section>
  );
}
