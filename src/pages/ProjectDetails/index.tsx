import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/projects";
import { v4 as uuidv4 } from "uuid";

import NavBar from "../../components/NavBar";
import { AiFillGithub } from "react-icons/ai";
import styles from "./index.module.css";
import BodyMarkdownContent from "../../components/BodyMarkdownContent";

import ReactLoading from "react-loading";

interface IProjectData {
  id: string;
  name: string;
  description: string;
  displayImage: IDisplayImage;
  projectUrl: string;
  githubUrl: string;
  projectDetails: string;
  projectStack: string[];
  projectType: string;
}

interface IDisplayImage {
  image: {
    url: string;
  };
  altText: string;
}

const ProjectDetails = () => {
  const { id: projectId } = useParams() as { id: string };

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDisplayImage, setProjectDisplayImage] = useState(
    {} as IDisplayImage
  );
  const [projectType, setProjectType] = useState("");
  const [projectStack, setProjectStack] = useState([] as string[]);
  const [projectUrl, setProjectUrl] = useState("");
  const [projectGithubUrl, setProjectGithubUrl] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const project = (await getProject(projectId)) as IProjectData;

        setProjectName(project.name);
        setProjectDescription(project.description);
        setProjectDisplayImage(project.displayImage);
        setProjectType(project.projectType);
        setProjectStack(project.projectStack);
        setProjectUrl(project.projectUrl);
        setProjectGithubUrl(project.githubUrl);
        setProjectDetails(project.projectDetails);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      <NavBar />
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
                <section className={styles.projectType}>
                  <h3>Project type</h3>
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
              <img
                src={projectDisplayImage?.image?.url}
                alt={projectDisplayImage.altText}
                width={"100%"}
                height={"100%"}
              />
              <BodyMarkdownContent content={projectDetails} />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
