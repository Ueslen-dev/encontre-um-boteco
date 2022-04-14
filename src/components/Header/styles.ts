import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  width: 100vw;
  background: var(--yellow-color-lighter);
  padding: 20px 20px 80px 20px;
`;

export const ArrowFigure = styled.figure`
  margin-top: 20px;
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 15%;

  @media ${tablet} {
    width: 5%;
  }
`;

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;

  @media ${tablet} {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-larger);
  text-align: center;

  @media ${tablet} {
    width: 40%;
    text-align: left;
  }
`;
