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
  --paragraph-font-size: 1.8rem;
  --button-font-size: 2.2rem;
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

.buttonOutlineWhite {
  background-color: var(--yellow-color-lighter);
  border: 3px solid var(--white-color);
  &:hover {
    background: rgba(0,0,0,0.1);
  }

  a {
    color: var(--white-color);
  }
}
`;

export default GlobalStyles;
