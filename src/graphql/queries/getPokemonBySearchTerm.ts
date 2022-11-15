import { gql } from "@apollo/client";

const getPokemonBySearchTerm = gql`
  query GetPokemonBySearchTerm($searchValue: String!) {
    pokemon: pokemon_v2_pokemon(where: { name: { _regex: $searchValue } }) {
      name
      id
    }
  }
`;

export default getPokemonBySearchTerm;
