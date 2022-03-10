import { Link } from "react-router-dom";
import styles from "./index.module.css";

const NavBar = () => (
  <div className={styles.container}>
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            style={
              window.location.pathname == "/"
                ? { color: "var(--color-blue)" }
                : {}
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={
              window.location.pathname == "/about"
                ? { color: "var(--color-blue)" }
                : {}
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            style={
              window.location.pathname == "/blog"
                ? { color: "var(--color-blue)" }
                : {}
            }
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={
              window.location.pathname == "/projects"
                ? { color: "var(--color-blue)" }
                : {}
            }
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
