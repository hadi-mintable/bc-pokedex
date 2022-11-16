import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto;
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none;

  > li {
    display: flex;
    width: 100%;
  }

  @media screen and (min-width: 581px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
