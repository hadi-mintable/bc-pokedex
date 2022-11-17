import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  padding-top: 50px;
  width: 100%;

  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    img {
      display: block;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 3rem;

    h1 {
      margin: 0;
      font-size: 2.5rem;
    }

    span {
      color: #919191;
      font-size: 1.125rem;
      font-weight: medium;
      line-height: 1.5rem;
    }

    ul {
      background-color: #5d5d5d;
      padding: 1.75rem 2rem;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      li {
        font-weight: bold;
        color: white;
      }
    }
  }
`;
