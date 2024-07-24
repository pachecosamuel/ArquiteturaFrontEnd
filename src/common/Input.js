import React from 'react';
import styled from 'styled-components';
import { Input as AntdInput } from 'antd';
import { theme } from '../styles/theme';

const StyledInput = styled(AntdInput)`
  padding: 0.75rem 1rem;
  margin-bottom: 0.75rem;
  border-radius: 30px;
  border: 1px solid ${theme.colors.neutral};
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
  font-family: ${theme.font.family};
  font-size: 0.85rem;

  &:focus {
    border-color: ${theme.colors.highlight};
    box-shadow: 0 0 10px rgba(0, 143, 140, 0.1);
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.forPlaceHolder};
  }
`;

export const Input = ({ ...rest }) => {
    return (
        <StyledInput {...rest} />
    );
};

export default Input;
