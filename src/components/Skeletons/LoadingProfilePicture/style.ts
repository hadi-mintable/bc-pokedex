import styled from "styled-components";
import { shine } from "../style";

export const ImgWrapper = styled.span`
  aspect-ratio: 1/1;
  height: 375px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1.5s ${shine} linear infinite;
  background-size: 300% 100%;
`;
