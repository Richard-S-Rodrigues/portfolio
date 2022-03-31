import { Link } from "react-router-dom";
import Header from "../../components/Header";
import ProjectsCard from "../../components/ProjectsCard";
import PostsCard from "../../components/PostsCard";

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { CgCodeSlash, CgNotes } from "react-icons/cg";

import styles from "./index.module.css";

const Home = () => (
  <div className={styles.container}>
    <Header />
    <main>
      <section className={styles.aboutContainer}>
        <p>
          I'm an enthusiastic programmer passionate by technology. Focused on
          Web development, i like to challenge myself building projects and
          improving or learning a skill everyday.
        </p>
      </section>
      <section className={styles.navContainer}>
        <nav>
          <ul>
            <li>
              <Link to="/blog">
                <CgNotes /> Blog
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <CgCodeSlash /> Projects
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.skillsContainer}>
        <header>
          <h1>My skills</h1>
          <span />
        </header>
        <div>
          <section className={styles.skillsList}>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Nodejs</li>
              <li>Nextjs</li>
            </ul>
          </section>
          <section className={styles.skillsDescription}>
            <h2>I love learning by building stuffs</h2>
            <article>
              <p>
                Since the first time i start learning about programming, i was
                always fascinated by the idea of creating something and
                understand how things works. And the way i learn those things is
                putting in practice by building fun projects.
              </p>
            </article>
          </section>
        </div>
      </section>
      <section className={styles.contactContainer}>
        <header>
          <h1>Contact</h1>
          <span />
        </header>
        <ul>
          <li>
            <a href="https://github.com/Richard-S-Rodrigues" target="_blank">
              <AiFillGithub size={30} style={{ color: "#fff" }} />{" "}
              Richard-S-Rodrigues
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/richard-s-rodrigues/"
              target="_blank"
            >
              <AiFillLinkedin size={30} style={{ color: "#fff" }} />{" "}
              Richard-S-Rodrigues
            </a>
          </li>
          <li className={styles.mailContact}>
            <AiOutlineMail /> <span>richardsouzarodrigues555@gmail.com</span>
          </li>
        </ul>
      </section>
      <section className={styles.featuredProjectsContainer}>
        <header>
          <h1>Featured Projects</h1>
          <span />
        </header>
        <ProjectsCard />
      </section>
      <section className={styles.featuredBlogPostsContainer}>
        <header>
          <h1>Featured Blog Posts</h1>
          <span />
        </header>
        <PostsCard />
      </section>
    </main>
  </div>
);

export default Home;
