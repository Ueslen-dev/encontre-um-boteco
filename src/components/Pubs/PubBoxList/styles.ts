import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  background: var(--white-color);
  padding: 25px;
  border-radius: 25px;
  margin-bottom: 30px;
`;

export const Content = styled.section`
  grid-template-columns: 1fr;

  @media ${tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const Infos = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media ${tablet} {
    flex-direction: row;
  }
`;

export const MainInfos = styled.section`
  text-align: center;
  margin: 10px 0 20px 0;
  width: 350px;

  @media ${tablet} {
    text-align: left;
  }
`;

export const Photo = styled.figure`
  margin: 0;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Name = styled.h1`
  color: var(--yellow-color);
  font-size: var(--font-size-larger);
  font-weight: var(--font-weight-medium);
`;

export const Location = styled.h2`
  color: var(--grey-color-lighter);
  font-size: var(--font-size-small);
`;

export const Address = styled.p`
  font-size: 1.6rem;
  font-weight: var(--font-weight-medium);
  color: var(--grey-color);
  margin: 20px 0 10px 0;
`;

export const Reference = styled.section``;

export const ReferenceTitle = styled.h2`
  font-size: var(--font-size-small);
  color: var(--grey-color);
`;

export const ReferenceDescription = styled.p`
  font-size: 1.6rem;
  color: var(--grey-color-lighter);
`;

export const Actions = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  button {
    margin: 0;
  }
`;
