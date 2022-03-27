import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProjects } from "../../services/getProjects";

import styles from "./index.module.css";

interface IProjectsData {
  id: string;
  name: string;
  description: string;
  image: {
    id: string;
    fileName: string;
    height: number;
    width: number;
    url: string;
  };
  projectUrl: string;
  githubUrl: string;
  updatedAt: string;
  publishedAt: string;
  createdAt: string;
}

const ProjectsCard = () => {
  const [projects, setProjects] = useState([] as IProjectsData[]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProjects();
      setProjects(response.projects);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <main key={project.id}>
          <section className={styles.imageContainer}>
            <img src={project.image.url} alt="" />
          </section>
          <section>
            <div className={styles.descriptionContainer}>
              <h3>{project.name}</h3>
              <article>
                <p>{project.description}</p>
              </article>
            </div>
            <div className={styles.actionsContainer}>
              <Link to={`/projects/${project.id}`}>View details</Link>
            </div>
          </section>
        </main>
      ))}
    </div>
  );
};

export default ProjectsCard;
