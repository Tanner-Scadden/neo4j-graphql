import { Neo4jGraphQL } from '@neo4j/graphql';

import typeDefs from 'graphql/typeDefs';
import resolvers from 'graphql/resolvers';
import driver from 'neo4j/driver';

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  resolvers,
  config: {
    jwt: {
      secret: 'ABC123',
    },
  },
});

export default neoSchema;
