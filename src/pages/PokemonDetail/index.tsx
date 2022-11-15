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
  TypeList,
} from "./style";
import LoadingProfilePicture from "../../components/Skeletons/LoadingProfilePicture";
import LoadingDetailBox from "../../components/Skeletons/LoadingDetailBox";
import PokemonType from "../../components/PokemonType";
import MeowthImage from "../../assets/images/meowth.png";

// description: pokemon_v2_characteristic(where: {id: {_eq: ${id}}}) {
//       pokemon_v2_characteristicdescriptions(where: {language_id: {_eq: 9}}) {
//         description
//         language_id
//       }
//     }

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

  if (error)
    return (
      <Wrapper>
        <PictureWrapper>
          <ProfilePicture src={MeowthImage} />
        </PictureWrapper>
        <div>
          <Title>
            errormon
            <Index> #404</Index>
          </Title>
          <Stats>
            <Description>
              Uh oh! This isn't actually pokemon #404. It appears you are facing
              an error. Please try to refresh the page.
            </Description>
          </Stats>
        </div>
      </Wrapper>
    );

  console.log(data?.pokemon[0]?.pokemon_type);

  const image = data
    ? JSON.parse(data?.pokemon?.[0]?.pokemon_v2_pokemonsprites?.[0]?.sprites)
        ?.front_default
    : "";

  return (
    <Wrapper>
      {loading ? (
        <>
          <LoadingProfilePicture />
          <LoadingDetailBox />
        </>
      ) : (
        <>
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
              {data?.pokemon[0]?.pokemon_type?.length && (
                <div>
                  <Label>Type</Label>
                  <TypeList>
                    {data?.pokemon[0]?.pokemon_type?.map(
                      (type: any, i: number) => (
                        <li key={i}>
                          <PokemonType
                            type={type?.pokemon_v2_type?.name}
                            size="md"
                          />
                        </li>
                      )
                    )}
                  </TypeList>
                </div>
              )}
            </Stats>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default PokemonDetail;
