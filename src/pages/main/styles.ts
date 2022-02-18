import styled from 'styled-components';
import { device } from 'utils/device';

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

export const LogoFigure = styled.figure`
  text-align: center;
`;

export const Logo = styled.img`
  width: 70%;
  margin-bottom: 2rem;
  @media ${tablet} {
    width: 80%;
  }
`;

export const Content = styled.section`
  margin-top: 40px;
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
