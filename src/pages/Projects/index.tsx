import NavBar from "../../components/NavBar";
import ProjectsCard from "../../components/ProjectsCard";

import styles from "./index.module.css";

const Projects = () => (
  <>
    <NavBar />
    <div className={styles.container}>
      <ProjectsCard />
    </div>
  </>
);

export default Projects;
