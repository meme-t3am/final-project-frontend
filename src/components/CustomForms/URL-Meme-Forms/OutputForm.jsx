import styles from '../MemeForm.css';
import TopMemeCard from './TopMemeCard';
import UserImageCard from './UserImageCard';

export default function OutputForm() {

  return (
    <>
      <section className={styles.Output}>
        <TopMemeCard/>
      </section>
      <section>
        <UserImageCard/>
      </section>
    </>
  );
}
