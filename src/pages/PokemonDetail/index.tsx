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
  DetailWrapper,
} from "./style";
import LoadingProfilePicture from "../../components/Skeletons/LoadingProfilePicture";
import LoadingDetailBox from "../../components/Skeletons/LoadingDetailBox";
import PokemonType from "../../components/PokemonType";
import Error from "./Error";
import useGetPokemonDetail from "../../hooks/useGetPokemonDetail";

const PokemonDetail = () => {
  let { id, pokemon } = useParams();

  const { data: pokemonDetail, isLoading } = useGetPokemonDetail(id as string);

  const descriptionArr = pokemonDetail?.descriptions?.filter(
    (desc: any) => desc?.language?.name === "en"
  );
  const description = descriptionArr?.[0]?.description;

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

  if (error) return <Error />;

  const image = data
    ? JSON.parse(data?.pokemon?.[0]?.pokemon_v2_pokemonsprites?.[0]?.sprites)
        ?.front_default
    : "";

  return (
    <Wrapper>
      {loading || isLoading ? (
        <>
          <LoadingProfilePicture />
          <LoadingDetailBox />
        </>
      ) : (
        <>
          <PictureWrapper>
            <ProfilePicture src={image} />
          </PictureWrapper>
          <DetailWrapper>
            <Title>
              {pokemon}{" "}
              <Index>#{("000" + data?.pokemon?.[0]?.id).substr(-3)}</Index>
            </Title>
            <Stats>
              {description && (
                <Description>{descriptionArr?.[0]?.description}</Description>
              )}
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
          </DetailWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default PokemonDetail;
