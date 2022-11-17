import { ErrorWrapper } from "./style";
import PsyduckImg from "@assets/images/psyduck.png";

const Error = () => {
  return (
    <ErrorWrapper>
      <aside>
        <h1>Pokémon not found!</h1>
        <span>
          Sorry! The page you're looking for is not here.
          <br />
          Please try the following:
        </span>
        <ul>
          <li>Refresh this page</li>
          <li>Return to the Homepage</li>
        </ul>
      </aside>
      <img src={PsyduckImg} alt="psyduck" />
    </ErrorWrapper>
  );
};

export default Error;
