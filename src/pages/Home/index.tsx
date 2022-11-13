// import { useState } from "react";
import styled from "styled-components";
import PokeCard from "../../components/PokeCard";
import { useQuery, gql } from "@apollo/client";

// there are a total of 925 pokemon

const List = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
`;

const Home = () => {
  //   const [startingCount, setStartingCount] = useState<number>(0);
  const GET_ALL_POKEMON = gql`
    query GetAllPokemonQuery {
      all_pokemon: pokemon_v2_pokemon(limit: 10) {
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

  const { loading, error, data } = useQuery(GET_ALL_POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List>
      {data?.all_pokemon?.map((pokemon: any) => (
        <PokeCard key={pokemon?.id} pokemon={pokemon} />
      ))}
    </List>
  );
};

export default Home;
