import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: var(--white-color);
  padding: 50px;
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

export const StepsAction = styled.section``;
