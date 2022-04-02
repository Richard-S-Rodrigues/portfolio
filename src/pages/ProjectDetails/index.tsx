import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/projects";
import { v4 as uuidv4 } from "uuid";

import NavBar from "../../components/NavBar";
import { AiFillGithub } from "react-icons/ai";
import styles from "./index.module.css";

const ProjectDetails = () => {
  const { id: projectId } = useParams() as { id: string };

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectStack, setProjectStack] = useState([]);
  const [projectUrl, setProjectUrl] = useState("");
  const [projectGithubUrl, setProjectGithubUrl] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  useEffect(() => {
    const getData = async () => {
      const project = (await getProject(projectId)).projects[0];

      setProjectName(project.name);
      setProjectDescription(project.description);
      setProjectType(project.projectType);
      setProjectStack(project.projectStack);
      setProjectUrl(project.projectUrl);
      setProjectGithubUrl(project.githubUrl);
      setProjectDetails(project.projectDetails);
    };
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main>
          <section className={styles.infoContainer}>
            <header>
              <h1>{projectName}</h1>
              <div className={styles.actions}>
                <a
                  className={styles.github}
                  href={projectGithubUrl}
                  target="_blank"
                >
                  <AiFillGithub />
                  Code
                </a>
                <a className={styles.live} href={projectUrl} target="_blank">
                  Live
                </a>
              </div>
            </header>
            <div className={styles.descriptionContainer}>
              <article>
                <p>{projectDescription}</p>
              </article>
            </div>
            <div className={styles.typeAndStackContainer}>
              <section>
                <h3>Type</h3>
                <span>{projectType}</span>
              </section>
              <section className={styles.techStackList}>
                <h3>Tech stack</h3>
                <ul>
                  {projectStack.map((tool) => (
                    <li key={uuidv4()}>{tool}</li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
          <section className={styles.bodyContent}>
            <h2>How it works</h2>
            <small>Project functionality</small>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProjectDetails;
