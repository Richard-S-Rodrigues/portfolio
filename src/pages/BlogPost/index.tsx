import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogPost } from "../../services/blogPosts";
import { formatDate } from "../../utils/formatDate";
import NavBar from "../../components/NavBar";
import BodyMarkdownContent from "../../components/BodyMarkdownContent";

import styles from "./index.module.css";

interface IBlogPostData {
  id: string;
  title: string;
  bodyContent: string;
  publishedAt: string;
}

const BlogPost = () => {
  const { postSlug } = useParams() as { postSlug: string };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const getData = async () => {
      const postData = (await getBlogPost(postSlug)) as IBlogPostData;
      const formatedDate = formatDate(new Date(postData.publishedAt));

      setTitle(postData.title);
      setDate(formatedDate);
      setMarkdownContent(postData.bodyContent);
    };
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <main>
          <header>
            <h1>{title}</h1>
            <small>{date}</small>
          </header>
          <article>
            <BodyMarkdownContent content={markdownContent} />
          </article>
        </main>
      </div>
    </>
  );
};

export default BlogPost;
