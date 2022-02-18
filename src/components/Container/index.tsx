import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

const Container = styled.section`
  @media ${tablet} {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default Container;
