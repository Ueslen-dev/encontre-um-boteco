import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  background: no-repeat url('/assets/img/bg.svg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  margin-top: 20px;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  padding: 25px;

  button {
    font-size: 1.8rem;
  }

  @media ${tablet} {
    display: flex;
    gap: 20px;

    button {
      width: auto;
      font-size: var(--font-size-larger);
    }
  }
`;
