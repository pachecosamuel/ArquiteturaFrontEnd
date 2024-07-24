// src/common/Button.js

import styled from "styled-components";
import { theme } from "../styles/theme";

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-family: ${theme.font.family};
  cursor: pointer;

  font-size: 1rem;
  border-radius: 30px;

  &:hover {
    background-color: ${theme.colors.highlight};
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
