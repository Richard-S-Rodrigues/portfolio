import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogPost } from "../../services/blogPosts";

interface IBlogPostData {
  id: string;
  title: string;
  description: string;
  bodyContent: string;
  postSlug: string;
  publishedAt: string;
}

const BlogPost = () => {
  const { postSlug } = useParams() as { postSlug: string };

  useEffect(() => {
    const getData = async () => {
      const postData = (await getBlogPost(postSlug)) as IBlogPostData;
      console.log(postData);
    };
    getData();
  }, []);
  return <div>Blog post</div>;
};

export default BlogPost;
