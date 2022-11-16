import styled, { css } from "styled-components";
import { shine } from "../style";

export const PokeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
`;

export const ImgWrapper = styled.span`
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1.5s ${shine} linear infinite;
  background-size: 300% 100%;
`;

export const TextShine = styled.span<{
  width: string;
}>`
  height: 15px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1.5s ${shine} linear infinite;
  background-size: 300% 100%;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1rem 0.875rem;
  background-color: white;
`;
