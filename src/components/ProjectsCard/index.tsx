import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <>
        {isLoading ? (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}
          >
            <ReactLoading />
          </div>
        ) : (
          projects.map(({ id, name, description, displayImage }) => (
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
          ))
        )}
      </>
    </div>
  );
};

export default ProjectsCard;
