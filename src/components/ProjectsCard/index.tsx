import { Link } from "react-router-dom";

import styles from "./index.module.css";

const ProjectsCard = () => (
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
          <Link to="/">View details</Link>
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
          <Link to="/">View details</Link>
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
          <Link to="/">View details</Link>
        </div>
      </section>
    </main>
  </div>
);

export default ProjectsCard;
