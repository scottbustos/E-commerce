import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden; /* Prevents horizontal scrolling */
  }
`;

export default GlobalStyle;
