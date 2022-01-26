import styled from 'styled-components';

export const Wrapper = styled.main`
  padding: 20px 40px;
  background-color: var(--grey-color-dark);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 0.5s all;
  margin-bottom: 12px;
  &:hover {
    background-color: var(--grey-color);
  }

  a {
    font-size: var(--button-font-size);
    text-decoration: none;
    color: var(--white-color);
    font-weight: 600;
    text-transform: uppercase;
  }
`;
