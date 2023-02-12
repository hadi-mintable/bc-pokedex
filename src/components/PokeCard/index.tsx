import { PokeCardProps } from "./definitions";
import PokemonType from "@components/PokemonType";
import { FALLBACK_IMAGE } from "@constants/config";
import useGetPokemonImage from "@hooks/useGetPokemonImage";
import {
  PokeCardWrapper,
  Title,
  Image,
  ImgWrapper,
  LinkToPokeDetail,
  PokemonId,
  Detail,
  TypeList,
  TypeEach,
} from "./style";

const PokeCard: React.FC<PokeCardProps> = ({ pokemon, isPokeFriend }) => {
  const types = pokemon?.pokemon_type;

  const speciesId = pokemon?.pokemon_species_id;

  const image = useGetPokemonImage(speciesId);

  const pokemonId =
    speciesId?.toString().length > 3
      ? speciesId
      : String(speciesId).padStart(4, "0");

  return (
    <LinkToPokeDetail
      to={
        isPokeFriend
          ? null
          : `/pokemon/${pokemon?.name}/${pokemon?.pokemon_species_id}`
      }
    >
      <PokeCardWrapper>
        <ImgWrapper>
          <Image src={image || FALLBACK_IMAGE} alt={pokemon?.name} />
        </ImgWrapper>
        <Detail>
          <PokemonId>#{pokemonId}</PokemonId>
          <Title>{pokemon?.name}</Title>
          {types && (
            <TypeList>
              {types.map((type, i) => (
                <TypeEach key={i}>
                  <PokemonType type={type?.pokemon_v2_type?.name} />
                </TypeEach>
              ))}
            </TypeList>
          )}
        </Detail>
      </PokeCardWrapper>
    </LinkToPokeDetail>
  );
};

export default PokeCard;
