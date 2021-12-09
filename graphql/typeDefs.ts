import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  # NODES
  type Podcast {
    itunesId: ID!
    title: String
    link: String
    feedURL: String
    description: String
    image: String
    users: [User] @relationship(type: "SUBSCRIBES_TO", direction: IN)
  }

  type User {
    id: ID! @id
    email: String! @unique
    hashedPassword: String! @private
    podcast: [Podcast] @relationship(type: "SUBSCRIBES_TO", direction: OUT)
  }

  # RESOLVER RESPONSES
  type PodcastSearchResult {
    itunesId: String!
    title: String
    description: String
    feedURL: String
    artwork: String
    categories: [String]
  }

  type AuthToken {
    token: String!
  }

  # RESOLVER TYPES
  type Query {
    podcastSearch(searchTerm: String!): [PodcastSearchResult]
  }

  type Mutation {
    register(email: String!, password: String!): AuthToken
    login(email: String!, password: String!): AuthToken
    subscribeToPodcast(itunesId: String!): Podcast
  }

  # AUTH PERMISSIONS
  extend type User @auth(rules: [{ isAuthenticated: true }])
`;

export default typeDefs;
