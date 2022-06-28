import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  button {
    margin-top: 20px;
    font-size: 1.8rem;
  }

  @media ${tablet} {
    button {
      font-size: var(--font-size-larger);
    }
  }
`;
