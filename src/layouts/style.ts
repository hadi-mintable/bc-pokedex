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
  display: flex;
  align-items: center;
`;

export const Clone = styled.span`
  color: rgb(160, 164, 171);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SearchInput = styled.div`
  background-color: rgb(240, 242, 247);
  color: rgb(18, 21, 21);
  border-radius: 0.5rem;
  gap: 0.75rem;
  display: flex;
  align-items: center;
  padding-inline-start: 0.75rem;
  min-width: 250px;
  position: relative;

  input {
    padding: 0.625rem 0.75rem 0.625rem 0px;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 1.25rem;
    border: 0;
    background-color: transparent;
    outline: 0;
  }
`;

export const PokeballImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;

export const SuggestionsList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  background-color: rgb(240, 242, 247);
  width: 100%;
  position: absolute;
  top: calc(100% + 0.5px);
  margin: 0;
  left: 0;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  overflow: hidden;

  li {
    border-bottom: 1px solid #e5e7eb;

    &:hover {
      background-color: #efefef;
    }

    &:last-of-type {
      border-bottom: 1px solid transparent;
    }
  }
`;

export const SuggestionsLink = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  font-size: 0.875rem;
  color: #212121;
  padding: 0.5rem 0.75rem;
  display: block;
`;
