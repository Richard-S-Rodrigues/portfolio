import { request, gql } from "graphql-request";

const graphcmsApi = import.meta.env.VITE_APP_GRAPHCMS_ENDPOINT as string;

const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects {
        id
        name
        description
        displayImage {
          image {
            url
          }
          altText
        }
      }
    }
  `;

  const response = await request(graphcmsApi, query);

  return response.projects;
};

const getProject = async (id: string) => {
  const query = gql`
    query MyQuery {
      project(where: {id: "${id}"}) {
        id
        name
        description
        displayImage {
          image {
            url
          }
          altText
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

  return response.project;
};

export { getProjects, getProject };
