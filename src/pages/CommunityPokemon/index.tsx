import PokeCard from "../../components/PokeCard";
import { LoadingPokeCards } from "../../components/Skeletons";
import { List, Wrapper } from "./style";
import { useQuery } from "@tanstack/react-query";

const CommunityPokemon = () => {
  const itemsPerPage = 12;

  const { data, isLoading } = useQuery(["fetchCommunityPokemon"], () => {});

  return (
    <Wrapper>
      {isLoading ? (
        <List>
          <LoadingPokeCards count={itemsPerPage} />
        </List>
      ) : (
        <>
          <List>
            {/* {data?.all_pokemon?.map((pokemon: any) => (
              <PokeCard key={pokemon?.id} pokemon={pokemon} />
            ))} */}
          </List>
        </>
      )}
    </Wrapper>
  );
};

export default CommunityPokemon;
