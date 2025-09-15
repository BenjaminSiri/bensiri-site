import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #fefefe;
    font-family: 'Roboto', sans-serif;
  }
`;

const Blue = '#42a7ff';

export { GlobalStyle, Blue };