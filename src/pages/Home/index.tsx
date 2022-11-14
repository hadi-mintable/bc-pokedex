import { useState } from "react";
import PokeCard from "../../components/PokeCard";
import { LoadingPokeCards } from "../../components/Skeletons";
import { useQuery, gql } from "@apollo/client";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { List, Wrapper, PaginationWrapper } from "./style";

// pokemon_v2_pokemon_aggregate {
//       aggregate {
//         count
//       }
//     }

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 12;

  const GET_ALL_POKEMON = gql`
    query GetAllPokemon {
      all_pokemon: pokemon_v2_pokemon(limit: 12, offset: ${
        currentPage * itemsPerPage
      }) {
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

  if (error) return <p>Error :(</p>;

  return (
    <Wrapper>
      {loading ? (
        <List>
          <LoadingPokeCards count={itemsPerPage} />
        </List>
      ) : (
        <>
          <List>
            {data?.all_pokemon?.map((pokemon: any) => (
              <PokeCard key={pokemon?.id} pokemon={pokemon} />
            ))}
          </List>
          <PaginationWrapper>
            <Pagination
              showTotal={(total, range) =>
                `${range[0]} - ${range[1]} of ${total} items`
              }
              // total={data?.pokemon_v2_pokemon_aggregate?.aggregate?.count}
              total={905}
              defaultCurrent={currentPage + 1}
              pageSize={12}
              onChange={(current) => {
                setCurrentPage(current - 1);
                window.scrollTo(0, 0);
              }}
            />
          </PaginationWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
