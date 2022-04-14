import styled from 'styled-components';

export const Wrapper = styled.main`
  position: fixed;
  right: 50px;
  top: 50px;
  width: 350px;
  padding: 5px 5px 5px 40px;
  z-index: 9;
  background: var(--white-color-snow);
  border-radius: 10px 0 0 10px;
  -webkit-box-shadow: 0px 3px 19px 2px #b5b5b5;
  box-shadow: 0px 3px 19px 2px #b5b5b5;
  border-right: 5px solid var(--yellow-color);
`;

export const Close = styled.button`
  border: none;
  font-size: 20px;
  cursor: pointer;
  float: right;
  background: transparent;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: var(--font-weight-medium);
  margin: 20px 15px 10px;
`;

export const Animation = styled.div`
  width: 70px;
  margin-left: -20px;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
`;
