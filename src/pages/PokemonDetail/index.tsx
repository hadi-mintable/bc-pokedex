import { useQuery } from "@apollo/client";
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
import LoadingProfilePicture from "@components/Skeletons/LoadingProfilePicture";
import LoadingDetailBox from "@components/Skeletons/LoadingDetailBox";
import PokemonType from "@components/PokemonType";
import getPokemonById from "@graphql/queries/getPokemonById";
import Error from "./Error";
import useGetPokemonDetail from "@hooks/useGetPokemonDetail";

const PokemonDetail = () => {
  let { id, pokemon } = useParams();

  const { data: pokemonDetail, isLoading } = useGetPokemonDetail(id as string);

  const descriptionArr = pokemonDetail?.descriptions?.filter(
    (desc) => desc?.language?.name === "en"
  );

  const description = descriptionArr?.[0]?.description;

  const { loading, error, data } = useQuery(getPokemonById, {
    variables: {
      id: +id,
    },
  });

  const image = data
    ? JSON.parse(data?.pokemon?.[0]?.pokemon_v2_pokemonsprites?.[0]?.sprites)
        ?.front_default
    : "";

  if (error) return <Error />;

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
                        (ability, i: number) => (
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
                    {data?.pokemon[0]?.pokemon_type?.map((type, i) => (
                      <li key={i}>
                        <PokemonType
                          type={type?.pokemon_v2_type?.name}
                          size="md"
                        />
                      </li>
                    ))}
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
