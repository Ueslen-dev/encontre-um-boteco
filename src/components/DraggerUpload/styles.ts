import styled from 'styled-components';

export const Wrapper = styled.main`
  .ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {
    color: var(--yellow-color);
    font-size: 60px;
  }

  .ant-upload.ant-upload-drag p.ant-upload-text {
    color: var(--grey-color-lighter);
    font-size: 1.6rem;
    font-weight: var(--font-weight-medium);
  }

  .ant-upload.ant-upload-drag p.ant-upload-hint {
    font-size: 1.5rem;
  }
  .ant-upload.ant-upload-drag {
    border: 2px dashed var(--grey-color-lighter);
    border-radius: 5px;
  }

  .ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
    border-color: var(--yellow-color);
  }

  .ant-upload-list-item-info {
    padding: 10px;
    margin-bottom: 20px;
  }

  .ant-upload-list-item-error,
  .ant-upload-list-item-error .ant-upload-text-icon > .anticon,
  .ant-upload-list-item-error .ant-upload-list-item-name {
    margin: 30px 0 20px 0;
  }

  .ant-upload-list-item-error,
  .ant-upload-list-item-error .ant-upload-text-icon > .anticon,
  .ant-upload-list-item-error .ant-upload-list-item-name {
    color: var(--pink-color);
  }

  .ant-upload-text span {
    color: var(--pink-color);
  }
`;

export const ErrorText = styled.div`
  color: var(--pink-color);
  font-size: 1.5rem;
  margin-top: 5px;
`;
