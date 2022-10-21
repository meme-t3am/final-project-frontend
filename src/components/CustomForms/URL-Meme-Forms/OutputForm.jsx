import styles from '../MemeForm.css';
import TopMemeCard from './TopMemeCard';
import UserImageCard from './UserImageCard';

export default function OutputForm() {
  return (
    <div className={styles.OutputContainer}>
      <section className={styles.Output}>
        <UserImageCard />
      </section>
      <section className={styles.Output}>
        <TopMemeCard />
      </section>
    </div>
  );
}
