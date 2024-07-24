// src/common/Input.js

import styled from "styled-components";
import { theme } from "../designSystem/theme";

export const InputStyle_ = styled.input`
  padding: 0.5rem;
  border: 1px solid ${theme.colors.primary};
  font-family: ${theme.font.family};
  margin-bottom: 1rem;
  width: 100%;

  &:focus {
    border-color: ${theme.colors.highlight};
    outline: none;
  }
`;

export default InputStyle_;
