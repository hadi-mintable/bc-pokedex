import styled, { css } from "styled-components";
import { PokemonTypeProps } from "./definitions";
import { typeStyle } from "./constants";

const Type = styled.span<PokemonTypeProps>`
  text-transform: capitalize;
  border-radius: 3px;
  line-height: 18px;
  margin: 0 1.5625% 0 0;
  font-size: 0.75rem;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fd7d24;

  ${(props) =>
    props.type &&
    css`
      ${typeStyle[props.type]}
    `}
`;

const PokemonType: React.FC<PokemonTypeProps> = ({ type }) => {
  return <Type type={type}>{type}</Type>;
};

export default PokemonType;
