import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  PictureWrapper,
  ProfilePicture,
  Title,
  Index,
  Stats,
} from "./style";

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
      <div>
        <Title>
          {pokemon}{" "}
          <Index>#{("000" + data?.pokemon?.[0]?.id).substr(-3)}</Index>
        </Title>
        <Stats>
          {data?.pokemon?.[0]?.height && (
            <span>{data?.pokemon?.[0]?.height}</span>
          )}
        </Stats>
      </div>
    </Wrapper>
  );
};

export default PokemonDetail;
