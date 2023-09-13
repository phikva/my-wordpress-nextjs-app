import { useMemo } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let apolloClient;

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: process.env.APOLLO_CLIENT_URI,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    batchLinks: true, // Enable batching
  });
}

// Function to create a new Apollo Client instance
function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

// Function to clear the Apollo Client cache
function clearApolloCache() {
  if (apolloClient) {
    apolloClient.cache.clear();
  }
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

export { clearApolloCache };
