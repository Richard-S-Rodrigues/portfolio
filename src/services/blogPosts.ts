import { request, gql } from "graphql-request";

const graphcmsApi = import.meta.env.VITE_APP_GRAPHCMS_ENDPOINT as string;

const getBlogPosts = async () => {
  const query = gql`
    query MyQuery {
      blogPosts {
        id
        title
        description
        postSlug
        publishedAt
      }
    }
  `;

  const response = await request(graphcmsApi, query);

  return response.blogPosts;
};

const getBlogPost = async (slug: string) => {
  const query = gql`
    query MyQuery {
      blogPost(where: { postSlug: "${slug}" }) {
        id
        title
        description
        bodyContent
        postSlug
        publishedAt
      }
    }
  `;

  const response = await request(graphcmsApi, query);

  return response.blogPost;
};

export { getBlogPosts, getBlogPost };
