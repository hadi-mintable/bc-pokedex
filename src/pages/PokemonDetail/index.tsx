import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const PictureWrapper = styled.div`
  aspect-ratio: 1/1;
  height: 300px;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePicture = styled.img`
  object-fit: cover;
  height: 200px;
`;

const Title = styled.h1`
  color: #212121;
  font-size: 36px;
  text-transform: capitalize;
  margin-top: 0;
`;

const Index = styled.span`
  color: #616161;
`;

const PokemonDetail = () => {
  let { id, pokemon } = useParams();

  const GET_POKEMON_BY_ID = gql`
    query GetPokemonById {
      pokemon: pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
        id
        name
        height
        weight
        pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  `;

  // find pokemon loading screen on gameboy

  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const image = JSON.parse(
    data?.pokemon?.[0]?.pokemon_v2_pokemonsprites?.[0]?.sprites
  )?.front_default;

  return (
    <Wrapper>
      <PictureWrapper>
        <ProfilePicture src={image} />
      </PictureWrapper>
      <Title>
        {pokemon} <Index>#{("000" + data?.pokemon?.[0]?.id).substr(-3)}</Index>
      </Title>
    </Wrapper>
  );
};

export default PokemonDetail;
