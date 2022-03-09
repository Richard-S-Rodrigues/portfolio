import { AiFillGithub } from "react-icons/ai";

import styles from "./index.module.css";

const FeaturedProjects = () => (
  <div className={styles.container}>
    <main>
      <section className={styles.imageContainer}>
        <img src="https://picsum.photos/200" alt="" />
      </section>
      <section>
        <div className={styles.descriptionContainer}>
          <h3>Project's name</h3>
          <article>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </article>
        </div>
        <div className={styles.actionsContainer}>
          <a href="#" className={styles.github}>
            <AiFillGithub />
            Github
          </a>
          <a href="#" className={styles.live}>
            Live
          </a>
        </div>
      </section>
    </main>

    <main>
      <section className={styles.imageContainer}>
        <img src="https://picsum.photos/200" alt="" />
      </section>
      <section>
        <div className={styles.descriptionContainer}>
          <h3>Project's name</h3>
          <article>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </article>
        </div>
        <div className={styles.actionsContainer}>
          <a href="#" className={styles.github}>
            <AiFillGithub />
            Github
          </a>
          <a href="#" className={styles.live}>
            Live
          </a>
        </div>
      </section>
    </main>

    <main>
      <section className={styles.imageContainer}>
        <img src="https://picsum.photos/200" alt="" />
      </section>
      <section>
        <div className={styles.descriptionContainer}>
          <h3>Project's name</h3>
          <article>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          </article>
        </div>
        <div className={styles.actionsContainer}>
          <a href="#" className={styles.github}>
            <AiFillGithub />
            Github
          </a>
          <a href="#" className={styles.live}>
            Live
          </a>
        </div>
      </section>
    </main>
  </div>
);

export default FeaturedProjects;
