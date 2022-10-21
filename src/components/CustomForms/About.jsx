/* eslint-disable max-len */
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.aboutDevs}>
      <div className={styles.team}>
        <div className={styles.member}>
            Niki
          <p></p>
        </div>
        <div className={styles.member}>
            Sebastian
        </div>
        <div className={styles.member}>
          <h3>Amaya Alejandra she/they</h3>
          <p>
Howdy! I’m a Software Engineer currently living in Portland, OR.  I love to travel in search of hot springs and spicy food! At home, I spend the most time cooking and tending to my many plants.
          </p>
          <img src={window.location.origin + '/ama.jpg'}/>
        </div>
        <div className={styles.member}>
            David
        </div>
      </div>
    </div>
  );
}
