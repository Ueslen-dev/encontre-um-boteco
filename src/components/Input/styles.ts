import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;

  .ant-form-item-control-input-content,
  input {
    height: 70px;
  }

  input {
    border: 2px solid var(--grey-color-lighter);
    border-radius: 10px;
    font-size: 1.6rem;
    color: var(--grey-color-lighter);
    font-weight: var(--font-weight-medium);
  }

  .ant-input:focus,
  .ant-input-focused {
    border-color: var(--yellow-color);
    box-shadow: 0 0 0 2px rgb(241 185 22 / 20%);
  }

  .ant-input:hover {
    border-color: var(--yellow-color);
  }
`;

export const Label = styled.div`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: var(--grey-color-lighter);
  font-weight: var(--font-weight-medium);
  span {
    color: var(--pink-color);
  }
`;

export const ErrorText = styled.div`
  color: var(--pink-color);
  font-size: 1.5rem;
  margin-top: 5px;
`;
