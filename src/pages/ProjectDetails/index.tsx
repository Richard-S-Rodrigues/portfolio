import NavBar from "../../components/NavBar";
import { AiFillGithub } from "react-icons/ai";
import styles from "./index.module.css";

const ProjectDetails = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main>
          <section className={styles.infoContainer}>
            <header>
              <h1>Psicologamarimar</h1>
              <div className={styles.actions}>
                <a
                  className={styles.github}
                  href="https://github.com/Richard-S-Rodrigues/psicologamarimar"
                  target="_blank"
                >
                  <AiFillGithub />
                  Code
                </a>
                <a
                  className={styles.live}
                  href="https://www.psicologamarimar.com/"
                  target="_blank"
                >
                  Live
                </a>
              </div>
            </header>
            <div className={styles.descriptionContainer}>
              <article>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  turpis arcu, ullamcorper et condimentum at, mollis et augue.
                  Curabitur cursus blandit placerat. Sed id quam eget quam
                  dignissim blandit eu eu ex. Ut porttitor ligula nec eleifend
                  malesuada. Ut quis posuere ante, sit amet dignissim urna.
                  Curabitur orci tortor, semper commodo ultricies vulputate,
                  commodo at ligula. Aenean sollicitudin risus non ex maximus
                  ultrices. Morbi malesuada vitae lorem eget suscipit. Vivamus
                  elementum pretium congue. Curabitur finibus nibh quis sem
                  aliquam suscipit. Aenean dapibus ex nunc, eget commodo nisl
                  aliquet nec. Suspendisse facilisis mollis orci, quis cursus
                  augue condimentum sit amet. Etiam faucibus orci sit amet leo
                  sodales, et scelerisque ligula volutpat. Vestibulum convallis
                  vitae metus ac tempor. Aenean consectetur metus magna, non
                  bibendum eros pretium eget. Duis ultricies vehicula leo.{" "}
                </p>
              </article>
            </div>
          </section>
          <section>
            <h2>How it works</h2>
            <small>Project functionality</small>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProjectDetails;
