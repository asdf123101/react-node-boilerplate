import gql from 'graphql-tag'

export const GET_LIST = gql`
  query GetList {
    list {
      id
      name
    }
  }
`
