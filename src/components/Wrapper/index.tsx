import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

const Wrapper = styled.main`
  background: var(--white-color-snow);
  height: 100vh;
  position: relative;
  border-radius: 5rem 5rem 0 0;
  top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  @media ${tablet} {
    border-radius: 5% 5% 0 0;
  }
`;

export default Wrapper;