import { ApolloClient, InMemoryCache } from "@apollo/client";
import { POKEMON_GRAPHQL_ENDPOINT } from "../constants/config";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: POKEMON_GRAPHQL_ENDPOINT,
});
