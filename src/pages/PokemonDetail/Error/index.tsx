import {
  Wrapper,
  PictureWrapper,
  ProfilePicture,
  Title,
  Stats,
  Description,
  Index,
} from "@pages/PokemonDetail/style";
import PsyduckImg from "@assets/images/psyduck.png";

const Error = () => {
  return (
    <Wrapper>
      <PictureWrapper>
        <ProfilePicture src={PsyduckImg} />
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
};

export default Error;
