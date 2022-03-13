import NavBar from "../../components/NavBar";
import PostsCard from "../../components/PostsCard";

import styles from "./index.module.css";

const Blog = () => (
  <>
    <NavBar />
    <div className={styles.container}>
      <PostsCard />
    </div>
  </>
);

export default Blog;
