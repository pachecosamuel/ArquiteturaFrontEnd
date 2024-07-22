// src/common/Button.js

import React from 'react';
import { Button as AntdButton } from 'antd';

export const Button = ({ name, children, ...rest }) => {
    return (
        <AntdButton {...rest}>
            {children}
        </AntdButton>
    );
};

export default Button;
