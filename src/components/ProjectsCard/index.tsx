import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProjects } from "../../services/projects";

import styles from "./index.module.css";

interface IProjectsData {
  id: string;
  name: string;
  description: string;
  displayImage: {
    image: {
      url: string;
    };
    altText: string;
  };
}

const ProjectsCard = () => {
  const [projects, setProjects] = useState([] as IProjectsData[]);

  useEffect(() => {
    const getData = async () => {
      const projectsData = await getProjects();
      setProjects(projectsData);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {projects.map(({ id, name, description, displayImage }) => (
        <main key={id}>
          <section className={styles.imageContainer}>
            <img src={displayImage.image.url} alt={displayImage.altText} />
          </section>
          <section>
            <div className={styles.descriptionContainer}>
              <h3>{name}</h3>
              <article>
                <p>{description}</p>
              </article>
            </div>
            <div className={styles.actionsContainer}>
              <Link to={`/projects/${id}`}>View details</Link>
            </div>
          </section>
        </main>
      ))}
    </div>
  );
};

export default ProjectsCard;
