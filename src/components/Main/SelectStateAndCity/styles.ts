import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  padding: 10px;
`;

export const SelectsGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media ${tablet} {
    flex-direction: row;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  button {
    width: 100%;
  }
`;
