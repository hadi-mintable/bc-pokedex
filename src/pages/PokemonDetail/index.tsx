import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  PictureWrapper,
  ProfilePicture,
  Title,
  Index,
  Stats,
  Description,
  InfoBox,
  Label,
  Info,
} from "./style";

const PokemonDetail = () => {
  let { id, pokemon } = useParams();

  // description: pokemon_v2_characteristic(where: {id: {_eq: ${id}}}) {
  //       pokemon_v2_characteristicdescriptions(where: {language_id: {_eq: 9}}) {
  //         description
  //         language_id
  //       }
  //     }

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
        pokemon_type: pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        abilities: pokemon_v2_pokemonabilities {
          ability: pokemon_v2_ability {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const image = data
    ? JSON.parse(data?.pokemon?.[0]?.pokemon_v2_pokemonsprites?.[0]?.sprites)
        ?.front_default
    : "";

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
          <Description>
            When the bulb on its back grows large, it appears to lose the
            ability to stand on its hind legs.
          </Description>
          <InfoBox>
            <div>
              {data?.pokemon?.[0]?.height && (
                <Info>
                  <Label>Height</Label>
                  <span>{data?.pokemon?.[0]?.height}'</span>
                </Info>
              )}
              {data?.pokemon?.[0]?.weight && (
                <Info>
                  <Label>Weight</Label>
                  <span>{data?.pokemon?.[0]?.weight} lbs</span>
                </Info>
              )}
            </div>
            <div>
              {data?.pokemon?.[0]?.abilities?.length && (
                <Info>
                  <Label>Abilities</Label>
                  {data?.pokemon?.[0]?.abilities?.map(
                    (ability: any, i: number) => (
                      <span key={i}>
                        {ability?.ability?.name?.replace("-", " ")}
                      </span>
                    )
                  )}
                </Info>
              )}
            </div>
          </InfoBox>
        </Stats>
      </div>
    </Wrapper>
  );
};

export default PokemonDetail;
