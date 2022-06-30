import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  button {
    font-size: 1.8rem;
  }

  @media ${tablet} {
    max-width: 60%;

    button {
      font-size: var(--font-size-larger);
    }
  }
`;

export const Title = styled.h1`
  margin: 20px;
`;
