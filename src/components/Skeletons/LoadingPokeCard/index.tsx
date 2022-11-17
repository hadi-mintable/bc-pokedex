import { PokeCardWrapper, ImgWrapper, Detail } from "./style";
import { TextShine } from "@components/Skeletons/style";

const LoadingPokeCard = () => {
  return (
    <PokeCardWrapper>
      <ImgWrapper />
      <Detail>
        <TextShine width="20%" />
        <TextShine width="80%" />
        <TextShine width="100%" />
      </Detail>
    </PokeCardWrapper>
  );
};

export default LoadingPokeCard;
