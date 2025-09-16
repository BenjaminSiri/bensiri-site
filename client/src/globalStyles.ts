import { createGlobalStyle } from "styled-components";

const Accent = '#34d399';
const Dark = '#222222';
const Light = '#fefefe';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${Light};
    font-family: 'Roboto', sans-serif;
  }
`;

export { GlobalStyle, Accent, Dark, Light };