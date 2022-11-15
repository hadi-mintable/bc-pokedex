import styled, { css } from "styled-components";
import { typeStyle, sizeStyle } from "./constants";
import { PokemonTypeProps } from "./definitions";

export const Type = styled.span<PokemonTypeProps>`
  text-transform: capitalize;
  border-radius: 3px;
  margin: 0 1.5625% 0 0;
  font-weight: bold;
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

  ${(props) =>
    props.size &&
    css`
      ${sizeStyle[props.size]}
    `}
`;
