import styled from "styled-components";
import { Link } from "react-router-dom";

export const PokeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-transform: capitalize;
  margin: 0;
  color: #313131;
  font-size: 1.125rem;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 180px;
`;

export const ImgWrapper = styled.div`
  aspect-ratio: 1/1;
  height: 300px;
  background: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkToPokeDetail = styled(Link)`
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  overflow: hidden;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
`;

export const PokemonId = styled.span`
  color: #919191;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0.875rem;
  background-color: white;
`;

export const TypeList = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style-type: none;
  padding-left: 0;
`;

export const TypeEach = styled.li`
  max-width: 110px;
  width: 38.4375%;
`;
