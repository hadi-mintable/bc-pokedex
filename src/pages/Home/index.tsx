import { useState } from "react";
import PokeCard from "@components/PokeCard";
import { LoadingPokeCards } from "@components/Skeletons";
import { useQuery } from "@apollo/client";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { List, Wrapper, PaginationWrapper } from "./style";
import { paginationLocale } from "./constants";
import getAllPokemon from "@graphql/queries/getAllPokemon";
import Error from "./Error";
import { PokemonListing } from "@constants/definitions";
import "./pagination.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 12;

  const { loading, error, data } = useQuery(getAllPokemon, {
    variables: {
      offset: currentPage * itemsPerPage,
    },
  });

  if (error)
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );

  return (
    <Wrapper>
      {loading ? (
        <List>
          <LoadingPokeCards count={itemsPerPage} />
        </List>
      ) : (
        <>
          <List>
            {data?.all_pokemon?.map((pokemon: PokemonListing) => (
              <li key={pokemon?.id}>
                <PokeCard pokemon={pokemon} />
              </li>
            ))}
          </List>
          <PaginationWrapper>
            <Pagination
              showTotal={(total, range) =>
                `${range[0]} - ${range[1]} of ${total} items`
              }
              total={905}
              defaultCurrent={currentPage + 1}
              pageSize={12}
              onChange={(current) => {
                setCurrentPage(current - 1);
                window.scrollTo(0, 0);
              }}
              showQuickJumper={true}
              locale={paginationLocale}
            />
          </PaginationWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
