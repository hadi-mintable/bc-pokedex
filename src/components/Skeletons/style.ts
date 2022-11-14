import styled, { keyframes, css } from "styled-components";

export const shine = keyframes`
  to {
      background-position-x: -300%;
    }
`;

export const TextShine = styled.span<{
  width: string;
  height?: string;
}>`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1.5s ${shine} linear infinite;
  background-size: 300% 100%;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height
      ? css`
          height: ${props.height};
        `
      : css`
          height: 15px;
        `}
`;
