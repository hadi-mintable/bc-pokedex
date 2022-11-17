import { useQuery } from "@tanstack/react-query";
import { POKEMON_DETAIL_REST_ENDPOINT } from "@constants/config";

const useGetPokemonDetail = (id: string) => {
  return useQuery(
    ["pokemonDetail"],
    () =>
      fetch(`${POKEMON_DETAIL_REST_ENDPOINT}/${id}`)
        .then((data) => data.json())
        .then((res) => res),
    {
      retry: 2,
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );
};

export default useGetPokemonDetail;
