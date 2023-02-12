const useGetPokemonImage = (id: string | number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export default useGetPokemonImage;
