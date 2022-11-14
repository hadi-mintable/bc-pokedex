import { DetailBox } from "./style";
import { TextShine } from "../style";

const LoadingDetailBox = () => {
  return (
    <DetailBox>
      <TextShine width="40%" height="35px" />
      <TextShine width="60%" height="35px" />
      <TextShine width="80%" height="35px" />
    </DetailBox>
  );
};

export default LoadingDetailBox;
