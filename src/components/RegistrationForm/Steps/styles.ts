import styled from 'styled-components';

type InputGroupProps = {
  gridTemplateColumns?: string;
};

export const Wrapper = styled.main`
  background-color: var(--white-color);
  padding: 50px;
  border-radius: 25px;
`;

export const InputGroup = styled.article<InputGroupProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props ? props.gridTemplateColumns : '1fr'};
  margin-bottom: 30px;
`;
