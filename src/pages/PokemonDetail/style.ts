import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 30px 0;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`;

export const PictureWrapper = styled.div`
  aspect-ratio: 1/1;
  max-width: 425px;
  width: 100%;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 580px) {
    height: 425px;
  }
`;

export const ProfilePicture = styled.img`
  object-fit: cover;
  height: 200px;
`;

export const Title = styled.h1`
  color: #212121;
  font-size: 36px;
  text-transform: capitalize;
  margin-top: 0;
`;

export const Index = styled.span`
  color: #616161;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  margin: 0;
`;

export const InfoBox = styled.div`
  background-color: #30a7bd;
  color: #fff;
  padding: 1.25rem;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (min-width: 581px) {
    max-width: 430px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export const Label = styled.div`
  display: flex;
  font-weight: bold;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: #212121;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const TypeList = styled.ul`
  padding-left: 0;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  list-style-type: none;

  li {
    display: flex;
  }
`;
