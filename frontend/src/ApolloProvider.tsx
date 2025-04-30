import React from 'react';
import { ApolloProvider as Provider, InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Change if your backend URL is different
  cache: new InMemoryCache(),
});

interface Props {
  children: React.ReactNode;
}

const ApolloProvider: React.FC<Props> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
