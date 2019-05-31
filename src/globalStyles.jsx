import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  @font-face {
    font-family: 'Avenir LT Std 35 Light';
    font-style: normal;
    font-weight: normal;
    src: local('Avenir LT Std 35 Light'),
      url('./fonts/AvenirLTStd-Medium.woff') format('woff');
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  ol, ul {
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html,
  body {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    font-family: 'Avenir LT Std 35 Light'
  }

  body {
    background: #000011;
  }
  p {
    font-size: 0.75em;
  }
`;
