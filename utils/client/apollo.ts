// /lib/apollo.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { removeJwtToken, getJwtToken } from 'utils/client/jwt';

const { DOMAIN_NAME } = process.env;
const JWT_ERRORS = ['jwt malformed', 'jwt expired', 'me user not found'];

const httpLink = createHttpLink({
  uri: `${DOMAIN_NAME}/api/v1/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = getJwtToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorHandler = onError(({ networkError }) => {
  if (networkError && JWT_ERRORS.includes(networkError.message)) {
    removeJwtToken();
    window.location.href = '/';
  }
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink).concat(errorHandler),
  cache: new InMemoryCache(),
});

export default apolloClient;
