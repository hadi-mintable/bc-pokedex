import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 64rem;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  color: white;
  background-color: rgb(18, 29, 51);
`;

export const Main = styled.main`
  padding: 90px 0 70px;
  min-height: 100vh;
  display: flex;
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Clone = styled.span`
  color: rgb(160, 164, 171);
`;
