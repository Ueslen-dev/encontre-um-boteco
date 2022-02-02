import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --grey-color: #222222;
  --grey-color-lighter: #858585;
  --grey-color-dark: #101002;
  --yellow-color: #F1B916;
  --yellow-color-lighter: #FCC21A;
  --yellow-color-dark: #CC9C0F;
  --green-color: #50CA89;
  --green-color-dark: #36AF6F;
  --pink-color: #F5436F;
  --pink-color-dark: #D12852;
  --white-color-snow: #EEEEEE;
  --white-color: #fff;
  --mobile-device: 760px;
  --font-size-larger: 2.2rem;
  --font-size-small: 1.8rem;
  --font-weight-medium: 600;
}

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

img {
  width: 100%
}

html {
  font-size: 62.5%;
}

html,body,#__next {
  height: 100%;
}

body {
  font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}

.ant-modal-body {
  padding: 10px 24px;
}

.antd-select-option {
  color: var(--grey-color-lighter);
  font-weight: var(--font-weight-medium);
}

`;

export default GlobalStyles;
