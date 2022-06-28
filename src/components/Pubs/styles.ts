import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  padding: 30px;

  @media ${tablet} {
    padding: 0;
  }
`;

export const LastResult = styled.h2`
  text-align: center;
  color: var(--grey-color);
`;
