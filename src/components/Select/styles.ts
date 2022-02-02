import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    padding: 8px;
    border: 2px solid var(--grey-color-lighter);
    border-radius: 5px;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector,
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    input {
    height: 50px;
    color: var(--grey-color-lighter);
    font-weight: var(--font-weight-medium);
    font-size: 15px;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    color: var(--grey-color-lighter);
    font-weight: var(--font-weight-medium);
    font-size: 15px;
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
`;
