import styled from 'styled-components';

export const Content = styled.main`
  margin-bottom: 20px;
`;

export const Header = styled.header`
  margin-bottom: 25px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Subtitle = styled.p`
  font-size: var(--font-size-small);
`;

export const Actions = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
  border-top: 1px solid #f0f0f0;
  padding-top: 15px;
`;
