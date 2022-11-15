import { PokeCardProps } from "./definitions";
import PokemonType from "../PokemonType";
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

const PokeCard: React.FC<PokeCardProps> = ({ pokemon }) => {
  const image = JSON.parse(
    pokemon?.pokemon_sprites?.[0]?.sprites
  ).front_default;

  const types = pokemon?.pokemon_type;

  const fallbackImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png";

  return (
    <LinkToPokeDetail
      to={`pokemon/${pokemon?.name}/${pokemon?.pokemon_species_id}`}
    >
      <PokeCardWrapper>
        <ImgWrapper>
          <Image src={image || fallbackImage} alt={pokemon?.name} />
        </ImgWrapper>
        <Detail>
          <PokemonId>
            #{("000" + pokemon?.pokemon_species_id).substr(-3)}
          </PokemonId>
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
