import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

type ButtonAction = {
  variation: 'update' | 'delete';
};

const editType = '#f0d995';
const deleteType = '#ddd';

export const Wrapper = styled.main`
  background: var(--white-color);
  padding: 20px;
  border-radius: 25px 25px 0 0;
  margin-bottom: 30px;
`;

export const Content = styled.section`
  grid-template-columns: 1fr;
`;

export const Infos = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media ${tablet} {
    height: 750px;
  }
`;

export const MainInfos = styled.section`
  text-align: center;
  margin: 10px 0 20px 0;
  width: 100%;
  max-width: 250px;
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
  overflow: hidden;
  text-overflow: ellipsis;
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Reference = styled.section``;

export const ReferenceTitle = styled.h2`
  font-size: var(--font-size-small);
  color: var(--grey-color);
`;

export const ReferenceDescription = styled.p`
  font-size: 1.6rem;
  color: var(--grey-color-lighter);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Actions = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  button:nth-child(1) {
    margin: 0;
  }
`;

export const MoreActions = styled.div`
  font-size: 25px;
  background: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  margin-top: 80px;
`;

export const ButtonAction = styled.button<ButtonAction>`
  border: 1px solid
    ${(props) => (props.variation === 'delete' ? deleteType : editType)};
  cursor: pointer;
  background: none;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  color: ${(props) => (props.variation === 'delete' ? deleteType : editType)};
  padding: 5px;
`;
