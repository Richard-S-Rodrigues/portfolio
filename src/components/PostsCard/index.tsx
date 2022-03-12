import { Link } from "react-router-dom";

import styles from "./index.module.css";

const PostsCard = () => (
  <div className={styles.container}>
    <div className={styles.postCard}>
      <Link to="/">
        <h3>Post 1 - Title</h3>
        <div>
          <small>15 Jan, 2022</small>
        </div>
        <p>
          Lorem ipsum dolor ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem lorem
          loremloemrelorem lroe lorem loorem
        </p>
      </Link>
    </div>
    <div className={styles.postCard}>
      <Link to="/">
        <h3>Post 2 - Title</h3>
        <div>
          <small>15 Jan, 2022</small>
        </div>
        <p>Lorem ipsum dolor ipsum lorem ipsum lorem ipsum lorem ipsum lorem</p>
      </Link>
    </div>
    <div className={styles.postCard}>
      <Link to="/">
        <h3>Post 3 - Title</h3>
        <div>
          <small>15 Jan, 2022</small>
        </div>
        <p>
          Lorem ipsum dolor ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem lorem
          loremloemrelorem lroe lorem loorem loremloemrelorem lroe lorem loorem
          loremloemrelorem lroe lorem loorem
        </p>
      </Link>
    </div>
  </div>
);

export default PostsCard;
