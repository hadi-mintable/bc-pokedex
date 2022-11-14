import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  padding: 30px 0;
  width: 100%;
`;

export const PictureWrapper = styled.div`
  aspect-ratio: 1/1;
  height: 375px;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
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
  max-width: 430px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Label = styled.div`
  display: flex;
  color: white;
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
