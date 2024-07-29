// src/designSystem/GlobalStyles.js

import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.font.family};
    background-color: ${theme.colors.neutral};
    color: ${theme.colors.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.primary};
  }

  a {
    color: ${theme.colors.highlight};
    text-decoration: none;
  }

  button {
    background-color: ${theme.colors.primary};
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-family: ${theme.font.family};
    cursor: pointer;
  }

  button:hover {
    background-color: ${theme.colors.highlight};
  }

  /* style.css ou index.css */

  body.new-product-page {
    background-image: url('../assets/Designer.jpeg'); /* Certifique-se de ajustar o caminho conforme necessário */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

`;

export default GlobalStyles;
