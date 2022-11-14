import styled from "styled-components";

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
  // background-color: white;
  color: white;
  background-color: rgb(18, 29, 51);
`;

export const Main = styled.main`
  padding-top: 90px;
  min-height: 100vh;
`;
