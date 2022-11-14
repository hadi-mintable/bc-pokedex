import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const PictureWrapper = styled.div`
  aspect-ratio: 1/1;
  height: 300px;
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
  justify-content: space-between;
  gap: 2rem;
`;
