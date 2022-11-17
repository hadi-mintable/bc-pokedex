import { gql } from "@apollo/client";

const getPokemonById = gql`
  query GetPokemonById($id: Int!) {
    pokemon: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_type: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

export default getPokemonById;
