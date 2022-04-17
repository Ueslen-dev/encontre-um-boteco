import styled from 'styled-components';
import { device } from 'utils/devices';

type Props = {
  size?: string;
  responsiveSize?: string;
};

const { tablet } = device;

export const LogoFigure = styled.figure`
  text-align: center;
  cursor: pointer;
`;

export const Logo = styled.img<Props>`
  width: ${(props) =>
    props.responsiveSize ? props.responsiveSize : props.size};
  margin-bottom: 2rem;

  @media ${tablet} {
    width: ${(props) => props.size};
  }
`;
