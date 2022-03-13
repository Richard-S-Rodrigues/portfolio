import { AiFillGithub } from "react-icons/ai";
import { CgCodeSlash, CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";

import ReactTooltip from "react-tooltip";

import profilePhoto from "../../assets/profile.jpg";
import styles from "./index.module.css";

const NavBar = () => (
  <div className={styles.container}>
    <nav>
      <Link to="/" className={styles.imageContainer}>
        <img
          src={profilePhoto}
          alt="Back to home page"
          data-tip="Go to homepage"
        />
        <ReactTooltip />
      </Link>
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
        <li>
          <a
            href="https://github.com/Richard-S-Rodrigues/portfolio"
            target="_blank"
          >
            <AiFillGithub /> Source
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
