import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../../services/blogPosts";

import styles from "./index.module.css";

interface IPostsData {
  id: string;
  title: string;
  description: string;
  postSlug: string;
  publishedAt: string;
}

const PostsCard = () => {
  const [posts, setPosts] = useState([] as IPostsData[]);

  useEffect(() => {
    const getData = async () => {
      const blogPosts = (await getBlogPosts()) as IPostsData[];

      setPosts(blogPosts);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {posts.map(({ id, title, description, postSlug, publishedAt }) => (
        <div className={styles.postCard} key={id}>
          <Link to={`/blog/${postSlug}`}>
            <h3>{title}</h3>
            <div>
              <small>{publishedAt}</small>
            </div>
            <p>{description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsCard;
