import Header from "../../components/Header";
import FeaturedProjects from "../../components/FeaturedProjects";
import FeaturedBlogPosts from "../../components/FeaturedBlogPosts";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import styles from "./index.module.css";

const Home = () => (
  <>
    <Header />
    <div className={styles.container}>
      <main>
        <section className={styles.aboutContainer}>
          <p>
            I'm an enthusiastic programmer passionate by technology. Focused on
            Web development, i like to challenge myself building projects and
            improving or learning a skill everyday.
          </p>
        </section>
        <section className={styles.contactContainer}>
          <header>
            <h1>Contact</h1>
            <span />
          </header>
          <h2>richardsouzarodrigues555@gmail.com</h2>
          <div className={styles.socials}>
            <a href="https://github.com/Richard-S-Rodrigues" target="_blank">
              <AiFillGithub size={30} style={{ color: "#fff" }} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/richard-s-rodrigues/"
              target="_blank"
            >
              <AiFillLinkedin size={30} style={{ color: "#fff" }} />{" "}
            </a>
          </div>
        </section>
        <section className={styles.featuredProjectsContainer}>
          <header>
            <h1>Featured Projects</h1>
            <span />
          </header>
          <FeaturedProjects />
        </section>
        <section className={styles.featuredBlogPostsContainer}>
          <header>
            <h1>Featured Blog Posts</h1>
            <span />
          </header>
          <FeaturedBlogPosts />
        </section>
      </main>
    </div>
  </>
);

export default Home;
