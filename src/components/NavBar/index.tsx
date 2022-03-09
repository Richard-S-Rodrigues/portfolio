import { Link } from "react-router-dom";
import styles from "./index.module.css";

const NavBar = () => (
  <div className={styles.container}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  </div>
);

export default NavBar;