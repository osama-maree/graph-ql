import gql from "graphql-tag";
export const CREATE_TODO = gql`
  mutation CreateTodo($content: String!) {
    createTodo(content: $content) {
      content
      _id
      completed
    }
  }
`;
export const FETCH_TASK = gql`
  query GetTodo {
    getTodo {
      _id
      content
      completed
    }
  }
`;
