<<<<<<< HEAD
import Header from "../../components/Header";
import FeaturedProjects from "../../components/FeaturedProjects";
import FeaturedBlogPosts from "../../components/FeaturedBlogPosts";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import styles from "./index.module.css";

const Home = () => (
  <div className={styles.container}>
    <Header />
    <main>
      <section className={styles.aboutContainer}>
        <p>
          I'm an enthusiastic programmer passionate by technology. Focused on
          Web development, i like to challenge myself building projects and
          improving a skill everyday.
        </p>
        <p className={styles.contact}>
          Find me on{" "}
          <a href="https://github.com/Richard-S-Rodrigues" target="_blank">
            <AiFillGithub size={25} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/richard-s-rodrigues/"
            target="_blank"
          >
            <AiFillLinkedin size={25} />{" "}
          </a>
          <span>
            or send me an E-mail at: richardsouzarodrigues555@gmail.com{" "}
          </span>
        </p>
      </section>
      <section className={styles.featuredProjectsContainer}>
        <h2>Featured Projects</h2>
        <FeaturedProjects />
      </section>
      <section className={styles.featuredBlogPostsContainer}>
        <h2>Featured Blog Posts</h2>
        <FeaturedBlogPosts />
      </section>
    </main>
  </div>
);

export default Home;
=======
import Header from "../../components/Header";
import FeaturedProjects from "../../components/FeaturedProjects";
import FeaturedBlogPosts from "../../components/FeaturedBlogPosts";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import styles from "./index.module.css";

const Home = () => (
  <div className={styles.container}>
    <Header />
    <main>
      <section className={styles.aboutContainer}>
        <p>
          I'm an enthusiastic programmer passionate by technology. Focused on
          Web development, i like to challenge myself building projects and
          improving a skill everyday.
        </p>
        <p className={styles.contact}>
          Find me on{" "}
          <a href="https://github.com/Richard-S-Rodrigues" target="_blank">
            <AiFillGithub size={25} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/richard-s-rodrigues/"
            target="_blank"
          >
            <AiFillLinkedin size={25} />{" "}
          </a>
          <span>
            or send me an E-mail at: richardsouzarodrigues555@gmail.com{" "}
          </span>
        </p>
      </section>
      <section className={styles.featuredProjectsContainer}>
        <h2>Featured Projects</h2>
        <FeaturedProjects />
      </section>
      <section className={styles.featuredBlogPostsContainer}>
        <h2>Featured Blog Posts</h2>
        <FeaturedBlogPosts />
      </section>
    </main>
  </div>
);

export default Home;
>>>>>>> d126242d6725cf82430b7edf1ebbe3221dfb52a8
