import { OGM } from '@neo4j/graphql-ogm';

import driver from 'neo4j/driver';
import typeDefs from 'graphql/typeDefs';

const ogm = new OGM({ typeDefs, driver });

export default ogm;
