import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogPosts } from "../../services/blogPosts";
import { formatDate } from "../../utils/formatDate";

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
      {!posts.length && (
        <div
          style={{
            marginTop: "1.5em",
            fontWeight: "600",
            fontSize: "1.3em",
            color: "var(--color-grey)"
          }}
        >
          Posts coming soon...
        </div>
      )}
      {posts.map(({ id, title, description, postSlug, publishedAt }) => {
        const formatedDate = formatDate(new Date(publishedAt));

        return (
          <div className={styles.postCard} key={id}>
            <Link to={`/blog/${postSlug}`}>
              <h3>{title}</h3>
              <div>
                <small>{formatedDate}</small>
              </div>
              <p>{description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostsCard;
