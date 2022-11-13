import { PokeCardProps } from "./definitions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PokemonType from "../PokemonType";

const PokeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-transform: capitalize;
  margin: 0;
  color: #313131;
  font-size: 1.125rem;
`;

const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  height: 300px;
  background: #e6e6e6;
`;

const LinkToPokeDetail = styled(Link)`
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  overflow: hidden;
`;

const PokemonId = styled.span`
  color: #919191;
  font-size: 0.875rem;
  font-weight: bold;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0.875rem;
  background-color: white;
`;

const TypeList = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style-type: none;
  padding-left: 0;
`;

const TypeEach = styled.li`
  max-width: 110px;
  width: 38.4375%;
`;

const PokeCard: React.FC<PokeCardProps> = ({ pokemon }) => {
  const image = JSON.parse(
    pokemon?.pokemon_sprites?.[0]?.sprites
  ).front_default;

  const types = pokemon?.pokemon_type;

  return (
    <LinkToPokeDetail
      to={`pokemon/${pokemon?.name}/${pokemon?.pokemon_species_id}`}
    >
      <PokeCardWrapper>
        <Image src={image} alt={pokemon?.name} />
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
