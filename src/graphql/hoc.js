import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const withDogListQuery = graphql(
  gql`
    query {
      dogs {
        id
        breed
      }
    }
  `
)

export const withDogPhotoQuery = graphql(
  gql`
    query Dog($breed: String!) {
      dog(breed: $breed) {
        id
        displayImage
      }
    }
  `, {
  options: ({ breed }) => ({
    variables: {
      breed
    },
  }),
  skip: ({ breed }) => !breed
})
