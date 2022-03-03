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
  @media ${tablet} {
    display: flex;
    gap: 20px;
  }
`;

export const TotalPub = styled.p`
  font-size: var(--font-size-small);
  margin-top: 25px;
`;
