import Cors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro';
import jwtUtils from 'utils/server/jwt';
import driver from 'neo4j/driver';

import neoSchema from 'graphql/schema';

import type { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors();

const apolloServer = new ApolloServer({
  schema: neoSchema.schema,
  context: ({ req }) => ({ req, jwt: jwtUtils.decodeJwt(req), driver: driver }),
});

const startServer = apolloServer.start();

// @ts-ignore
export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  // IMPORTANT FOR ENSURING UNIQUE CONSTRAINTS IN THE DB
  await neoSchema.assertIndexesAndConstraints({ options: { create: true } });
  await startServer;

  await apolloServer.createHandler({
    path: '/api/v1/graphql',
    // @ts-ignore
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
