import styled from 'styled-components';
import { device } from 'utils/devices';

const { tablet } = device;

export const Wrapper = styled.main`
  background-color: var(--white-color);
  padding: 30px;
  border-radius: 25px;

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: var(--yellow-color);
  }

  .ant-steps-item-custom.ant-steps-item-process
    .ant-steps-item-icon
    > .ant-steps-icon {
    color: var(--yellow-color);
  }

  .ant-steps {
    font-weight: var(--font-weight-medium);
    color: var(--grey-color);
  }

  .ant-steps-item-title {
    font-size: 1.7rem;
  }

  .iconSize {
    font-size: 40px;
  }

  .ant-steps-item-finish
    > .ant-steps-item-container
    > .ant-steps-item-content
    > .ant-steps-item-title::after {
    background-color: var(--yellow-color);
  }

  .steps-content {
    margin-top: 40px;
  }

  @media ${tablet} {
    padding: 50px;
  }
`;

export const Ttile = styled.h1`
  color: var(--grey-color);
  font-size: var(--font-size-small);
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  span {
    color: var(--pink-color);
  }
  margin-bottom: 30px;
`;

export const StepsAction = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 30px;
  gap: 20px;
  align-items: center;

  .previousButton {
    background: var(--grey-color-light) !important;
    border-color: var(--grey-color-light) !important;
  }

  .ant-btn-icon-only.ant-btn-lg {
    width: 50px;
    height: 50px;
    background: var(--yellow-color);
    border-color: var(--yellow-color);
  }

  .icon {
    font-size: 20px;
  }
`;
