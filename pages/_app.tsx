import { ApolloProvider } from '@apollo/client';
import apolloClient from 'utils/client/apollo';

import 'styles/tailwind.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
