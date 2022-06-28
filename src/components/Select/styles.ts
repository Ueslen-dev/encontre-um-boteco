import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  margin-bottom: 20px;

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    padding: 18px;
    border-radius: 10px;
    border: 2px solid var(--grey-color-lighter);
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector,
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    input {
    height: 70px;
    color: var(--grey-color-lighter);
    font-weight: var(--font-weight-medium);
    font-size: 1.6rem;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    font-weight: var(--font-weight-medium);
    font-size: 1.6rem;
  }

  .ant-select-arrow {
    width: 16px;
    height: 16px;
    color: var(--grey-color-lighter);
    font-size: 16px;
  }

  .ant-select {
    width: 100%;
    font-weight: var(--font-weight-medium);
  }

  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: var(--yellow-color);
  }

  .ant-select-selection:focus {
    border-color: var(--yellow-color);
    box-shadow: 0 0 0 2px rgb(241 185 22 / 20%);
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
