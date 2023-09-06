import { useMemo } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    uri: process.env.APOLLO_CLIENT_URI,
    cache: new InMemoryCache(),
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
