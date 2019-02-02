import { gql } from 'apollo-server'

// The GraphQL schema
export const typeDefs = gql`
  type List {
    id: ID!
    name: String!
  }

  type Query {
    list: [List!]!
  }
`

const list = [
  {
    id: 1,
    name:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est mauris, condimentum ut orci eu, facilisis eleifend neque. Suspendisse sed faucibus lorem. Nullam sed luctus sapien, id scelerisque augue. Duis sed cursus erat. Integer sit amet justo sed eros blandit iaculis. In eu rhoncus purus, vitae sodales nulla. Etiam facilisis laoreet ante, a posuere sapien euismod ut. Vestibulum rutrum placerat lacus. Vestibulum ut elementum libero, ut sollicitudin est. Aliquam diam nibh, tristique vitae lorem a, convallis tristique nunc.',
  },
  {
    id: 2,
    name:
      'Phasellus sed leo tellus. Aliquam congue, enim egestas molestie elementum, quam mi lacinia velit, nec consequat nisi magna a leo. Quisque euismod ante massa, vel elementum lectus dictum vel. Donec non est volutpat magna interdum blandit. Morbi suscipit bibendum lacus id dictum. Phasellus commodo a erat nec pharetra. Curabitur mattis posuere tellus vitae interdum. Cras efficitur nunc lectus, et hendrerit libero efficitur vitae. Nunc tincidunt aliquet erat, id tincidunt nisl bibendum non.',
  },
  {
    id: 3,
    name:
      'Aliquam eu dapibus purus, sit amet cursus ante. Quisque tincidunt turpis in velit sollicitudin mollis. Quisque placerat augue eget magna lobortis, vitae fringilla est dapibus. Morbi tristique lectus commodo, commodo metus quis, faucibus dui. Donec at felis vel erat efficitur tempor. Cras consectetur consequat orci, a aliquet odio pulvinar in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed blandit elementum diam eget venenatis. Integer bibendum dui id nulla semper euismod. Nam eleifend turpis vitae varius rhoncus.',
  },
]

export const resolvers = {
  Query: {
    list: () => list,
  },
}
