/* eslint-disable max-len */
import { DiGithubBadge } from 'react-icons/di';
import { AiFillLinkedin } from 'react-icons/ai';
import styles from './About.css';

export default function AboutPage() {
  return (
    <div>
      {/* <header className=>
        <h1></h1>
      </header> */}

      <div className={styles.aboutDevs}>
       
        <div className={styles.member}>
          <h2>Amaya Alejandra she/they</h2>
          <img className={styles.devImage} src="/ama.jpg" />
          <p className={styles.devP}>Howdy! I’m a Software Engineer currently living in Portland, OR. 
           I love to travel in search of hot springs and spicy food! At home, I spend the most time cooking and tending to my many plants.

          </p> <br/> <br/>
          <span>
            <a
              className={styles.devLink}
              href="https://www.linkedin.com/in/amayamaya/"
              target="blank"
            >
              {' '}
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a
              className={styles.devLink}
              href="https://github.com/amayamaya"
              target="blank"
            >
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
        <div className={styles.member}>
          <h2>Niki Hite she/her</h2>
          <img className={styles.devImage} src="/nik.jpeg" />
          <p className={styles.devP}>Hiii, I’m Niki! I’m a Software Engineer from Vancouver, WA. 
          I love to be outside any chance I get with family and friends. If you know me, then you’ll definitely know my doggos!</p>
          <br/> <br/> <br/>
          <span>
            <a
              className={styles.devLink}
              href="https://www.linkedin.com/in/nikihite/"
              target="blank"
            >
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a
              className={styles.devLink}
              href="https://github.com/nikihite/
"
              target="blank"
            >
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
        <div className={styles.member}>
          <h2>David Rigby he/him</h2>
          <img className={styles.devImage} src="/dav.png" />
          <p className={styles.devP}>Hi, I am David. I am a software developer from Estacada, OR. 
          I love to play disc golf and watch movies with my wife and two cats. My favorite memes are Star Wars prequel memes.
          </p> <br /> <br/>
          <span>
            <a
              className={styles.devLink}
              href="https://www.linkedin.com/in/sebastian-simek/"
              target="blank"
            >
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a className={styles.devLink} href="https://github.com/sebastian-Simek/" target="blank">
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
        <div className={styles.member}>
          <h2>Sebastian Simek he/him</h2>
          <img className={styles.devImage} src="/seb.jpg" />
          <p className={styles.devP}>Hey, I am a Software Engineer living in Portland, OR. My favorite memes are The Office and Archer related.
          </p> <br/> <br/> <br/> <br/>
          <span>
            <a
              className={styles.devLink}
              href="https://www.linkedin.com/in/david-rigby2022/"
              target="blank"
            >
            LinkedIn
              <AiFillLinkedin />
            </a>
            <a className={styles.devLink} href="https://github.com/rigby-david/" target="blank">
            GitHub
              <DiGithubBadge />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
