import { gql } from "@apollo/client";

const getAllPokemon = gql`
  query GetAllPokemon($offset: Int!) {
    all_pokemon: pokemon_v2_pokemon(limit: 12, offset: $offset) {
      id
      name
      pokemon_species_id
      pokemon_sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_type: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export default getAllPokemon;
