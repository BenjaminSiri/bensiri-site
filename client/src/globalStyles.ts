import { createGlobalStyle } from "styled-components";

const Accent = '#34d399';
const Accent2 = '#ffda5e';
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

export { GlobalStyle, Accent, Accent2, Dark, Light };