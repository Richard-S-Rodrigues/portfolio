import { request, gql } from "graphql-request";

const graphcmsApi = import.meta.env.VITE_APP_GRAPHCMS_ENDPOINT as string;

const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects {
        id
        name
        description
        image {
          id
          fileName
          height
          width
          url
        }
        projectUrl
        githubUrl
        updatedAt
        publishedAt
        createdAt
      }
    }
  `;

  const response = await request(graphcmsApi, query);

  return response;
};

const getProject = async (id: string) => {
  const query = gql`
    query MyQuery {
      projects(where: {id: "${id}"}) {
        id
        name
        description
        image {
          id
          fileName
          height
          width
          url
        }
        projectUrl
        githubUrl
        projectDetails
        projectStack
        projectType
      }
    }
  `;

  const response = await request(graphcmsApi, query);

  return response;
};

export { getProjects, getProject };
