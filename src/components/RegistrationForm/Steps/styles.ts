import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

type InputGroupProps = {
  gridTemplateColumns?: string;
  gap?: string;
  marginBottom?: string;
};

export const InputGroup = styled.div<InputGroupProps>`
  display: grid;
  grid-template-columns: '1fr';
  margin-bottom: ${(props) => props.marginBottom};
  gap: ${(props) => props.gap};

  @media ${tablet} {
    grid-template-columns: ${(props) =>
      props ? props.gridTemplateColumns : '1fr'};
    gap: 20px;
  }
`;
